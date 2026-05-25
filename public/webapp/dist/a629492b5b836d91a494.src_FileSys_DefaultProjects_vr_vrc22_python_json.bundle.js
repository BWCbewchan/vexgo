"use strict";
(self["webpackChunkwebapp"] = self["webpackChunkwebapp"] || []).push([["src_FileSys_DefaultProjects_vr_vrc22_python_json"],{

/***/ "./src/FileSys/DefaultProjects/vr/vrc22_python.json":
/*!**********************************************************!*\
  !*** ./src/FileSys/DefaultProjects/vr/vrc22_python.json ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"mode":"Text","textContent":"#region VEXcode Generated Robot Configuration\\nimport math\\nimport random\\nfrom vexcode_vrc import *\\nfrom vexcode_vrc.events import get_Task_func\\n\\n# Brain should be defined by default\\nbrain=Brain()\\n\\ndrivetrain = Drivetrain(\\"drivetrain\\", 0)\\nleft_distance = Distance(\\"DistanceLeft\\", 12)\\ncenter_distance = Distance(\\"DistanceCenter\\", 13)\\nright_distance = Distance(\\"DistanceRight\\", 20)\\noptical = Optical(\\"Optical\\", 19)\\nfork_motor_group = Motor(\\"ForkMotorGroup\\", 9)\\nbumper = Bumper(\\"Bumper\\", 21)\\nrotation = Rotation(\\"Rotation\\", 23)\\n#endregion VEXcode Generated Robot Configuration\\n# ------------------------------------------\\n# \\n# \\tProject:      VEXcode Project\\n#\\tAuthor:       VEX\\n#\\tCreated:\\n#\\tDescription:  VEXcode VR Python Project\\n# \\n# ------------------------------------------\\n\\n# Add project code in \\"main\\"\\ndef main():\\n    drivetrain.drive_for(FORWARD, 200, MM)\\n\\n# VR threads — Do not delete\\nvr_thread(main)\\n","textLanguage":"python","rconfig":[],"slot":0,"platform":"PG","sdkVersion":"","appVersion":"","fileFormat":"1.0.1","icon":"","robotModel":"vrc22"}');

/***/ })

}]);