"use strict";
(self["webpackChunkwebapp"] = self["webpackChunkwebapp"] || []).push([["src_FileSys_DefaultProjects_vr_vrc23_python_json"],{

/***/ "./src/FileSys/DefaultProjects/vr/vrc23_python.json":
/*!**********************************************************!*\
  !*** ./src/FileSys/DefaultProjects/vr/vrc23_python.json ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"mode":"Text","textContent":"#region VEXcode Generated Robot Configuration\\nimport math\\nimport random\\nfrom vexcode_vrc import *\\nfrom vexcode_vrc.events import get_Task_func\\n\\n# Brain should be defined by default\\nbrain=Brain()\\n\\ndrivetrain = Drivetrain(\\"drivetrain\\", 0)\\nbottom_distance = Distance(\\"BottomDistance\\", 18)\\nroller_optical = Optical(\\"RollerOptical\\", 2)\\nintake_motor_group = Motor(\\"IntakeMotorGroup\\", 10)\\nbottom_line_tracker = LineTracker(\\"BottomLineTracker\\", 22)\\nmiddle_line_tracker = LineTracker(\\"MiddleLineTracker\\", 23)\\ntop_line_tracker = LineTracker(\\"TopLineTracker\\", 24)\\ngps = GPS(\\"GPS\\", 3)\\n#endregion VEXcode Generated Robot Configuration\\n# ------------------------------------------\\n# \\n# \\tProject:      VEXcode Project\\n#\\tAuthor:       VEX\\n#\\tCreated:\\n#\\tDescription:  VEXcode VR Python Project\\n# \\n# ------------------------------------------\\n\\n# Add project code in \\"main\\"\\ndef main():\\n    drivetrain.drive_for(FORWARD, 200, MM)\\n\\n# VR threads — Do not delete\\nvr_thread(main)\\n","textLanguage":"python","rconfig":[],"slot":0,"platform":"PG","sdkVersion":"","appVersion":"","fileFormat":"1.0.1","icon":"","robotModel":"vrc23"}');

/***/ })

}]);