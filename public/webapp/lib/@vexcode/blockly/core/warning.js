/**
 * @license
 * Copyright 2012 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Object representing a warning.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Warning');

goog.require('Blockly.Bubble');
goog.require('Blockly.Events');
goog.require('Blockly.Events.Ui');
goog.require('Blockly.Icon');
goog.require('Blockly.utils.dom');
goog.require('Blockly.utils.object');
goog.require('Blockly.utils.Svg');


/**
 * Class for a warning.
 * @param {!Blockly.Block} block The block associated with this warning.
 * @extends {Blockly.Icon}
 * @constructor
 */
Blockly.Warning = function(block) {
  Blockly.Warning.superClass_.constructor.call(this, block);
  this.createIcon();
  // The text_ object can contain multiple warnings.
  this.text_ = {};
};
Blockly.utils.object.inherits(Blockly.Warning, Blockly.Icon);

/**
 * Does this icon get hidden when the block is collapsed.
 */
Blockly.Warning.prototype.collapseHidden = false;

/**
 * Draw the warning icon.
 * @param {!Element} group The icon group.
 * @protected
 */
Blockly.Warning.prototype.drawIcon_ = function(group) {
  // Circle for error reporting
  Blockly.utils.dom.createSvgElement(
      Blockly.utils.Svg.CIRCLE,
      {
        'class': 'blocklyIconShapeWarning',
        'cx': '9', 'cy': '9', 'r': '11',
      },
      group);

  // Adjusted coordinates for the first line of the X
  Blockly.utils.dom.createSvgElement(
      Blockly.utils.Svg.LINE,
      {
        'class': 'blocklyIconSymbol',
        'x1': '5', 'y1': '5',
        'x2': '13', 'y2': '13',
        'stroke': 'white', 'stroke-width': '2'
      }, group);

  // Adjusted coordinates for the second line of the X
  Blockly.utils.dom.createSvgElement(
      Blockly.utils.Svg.LINE,
      {
        'class': 'blocklyIconSymbol',
        'x1': '13', 'y1': '5',
        'x2': '5', 'y2': '13',
        'stroke': 'white', 'stroke-width': '2'
      },
      group);
};

/**
 * Create the text for the warning's bubble.
 * @param {string} text The text to display.
 * @return {!SVGTextElement} The top-level node of the text.
 * @private
 */
Blockly.Warning.textToDom_ = function(text) {
  var paragraph = Blockly.utils.dom.createSvgElement(
      Blockly.utils.Svg.TEXT,
      {
        'class': 'blocklyText blocklyBubbleText blocklyNoPointerEvents',
        'y': Blockly.Bubble.BORDER_WIDTH
      },
      null);
  var lines = text.split('\n');
  for (var i = 0; i < lines.length; i++) {
    var tspanElement = Blockly.utils.dom.createSvgElement(
        Blockly.utils.Svg.TSPAN,
        {'dy': '1em', 'x': Blockly.Bubble.BORDER_WIDTH}, paragraph);
    var textNode = document.createTextNode(lines[i]);
    tspanElement.appendChild(textNode);
  }
  return paragraph;
};

/**
 * Show or hide the warning bubble.
 * @param {boolean} visible True if the bubble should be visible.
 */
Blockly.Warning.prototype.setVisible = function(visible) {
  if (visible == this.isVisible()) {
    return;
  }
  Blockly.Events.fire(
      new Blockly.Events.Ui(this.block_, 'warningOpen', !visible, visible));
  if (visible) {
    this.createBubble();
  } else {
    this.disposeBubble();
  }
};

/**
 * Show the bubble.
 * @package
 */
Blockly.Warning.prototype.createBubble = function() {
  // TODO (#2943): This is package because comments steal this UI for
  //  non-editable comments, but really this should be private.
  this.paragraphElement_ = Blockly.Warning.textToDom_(this.getText());
  this.bubble_ = new Blockly.Bubble(
      /** @type {!Blockly.WorkspaceSvg} */ (this.block_.workspace),
      this.paragraphElement_, this.block_.pathObject.svgPath,
      /** @type {!Blockly.utils.Coordinate} */ (this.iconXY_), null, null);
  // Expose this warning's block's ID on its top-level SVG group.
  this.bubble_.setSvgId(this.block_.id);
  if (this.block_.RTL) {
    // Right-align the paragraph.
    // This cannot be done until the bubble is rendered on screen.
    var maxWidth = this.paragraphElement_.getBBox().width;
    for (var i = 0, textElement;
      (textElement = this.paragraphElement_.childNodes[i]); i++) {

      textElement.setAttribute('text-anchor', 'end');
      textElement.setAttribute('x', maxWidth + Blockly.Bubble.BORDER_WIDTH);
    }
  }
  this.applyColour();
};

/**
 * Dispose of the bubble and references to it.
 * @package
 */
Blockly.Warning.prototype.disposeBubble = function() {
  // TODO (#2943): This is package because comments steal this UI for
  //  non-editable comments, but really this should be private.
  this.bubble_.dispose();
  this.bubble_ = null;
  this.body_ = null;
  this.paragraphElement_ = null;
};

/**
 * Set this warning's text.
 * @param {string} text Warning text (or '' to delete). This supports
 *    linebreaks.
 * @param {string} id An ID for this text entry to be able to maintain
 *     multiple warnings.
 */
Blockly.Warning.prototype.setText = function(text, id) {
  if (this.text_[id] == text) {
    return;
  }
  if (text) {
    this.text_[id] = text;
  } else {
    delete this.text_[id];
  }
  if (this.isVisible()) {
    this.setVisible(false);
    this.setVisible(true);
  }
};

/**
 * Get this warning's texts.
 * @return {string} All texts concatenated into one string.
 */
Blockly.Warning.prototype.getText = function() {
  var allWarnings = [];
  for (var id in this.text_) {
    allWarnings.push(this.text_[id]);
  }
  return allWarnings.join('\n');
};

/**
 * Dispose of this warning.
 */
Blockly.Warning.prototype.dispose = function() {
  this.block_.warning = null;
  Blockly.Icon.prototype.dispose.call(this);
};

// RM Code Start
/**
 * Get the width of bubble
 * @return {number} Width of the bubble. Returns 0 if it doesn't exist.
 */
Blockly.Warning.prototype.getBubbleWidth = function() {
  if (this.bubble_ && this.bubble_.width_ && this.isVisible()) {
    return this.bubble_.width_;
  }
  return 0;
};
// RM Code End
