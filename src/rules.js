/**
 * Validation rules description in array of objects
 */
const rules = [
  {
    name: "required",
    description:
      "The field under validation is required and must have a value.",
    parameters: [],
  },

  {
    name: "accepted",
    description:
      "This is intended for checkbox field. The field under validation must be accepted/checked.",
    parameters: [],
  },

  {
    name: "email",
    description:
      "The field under validation must be formatted as an e-mail address.",
    parameters: [],
  },

  {
    name: "matched",
    description:
      "The field under validation must have a matching value from another field. Best used in confirm password field.",
    parameters: ["fieldName"],
    notes: ["The fieldName must exists in the form"],
  },

  {
    name: "ip",
    description:
      "The field under validation must be an IP address. Either `ipv4` or `ipv6` format.",
    parameters: [],
  },

  {
    name: "ipv4",
    description: "The field under validation must be an `ipv4` IP address.",
    parameters: [],
  },

  {
    name: "ipv6",
    description: "The field under validation must be an `ipv6` IP address.",
    parameters: [],
  },

  {
    name: "minLen",
    description:
      "The field string length under validation must be greater than or equal to a minimum.",
    parameters: ["min"],
    notes: ["min parameter must be a positive integer."],
  },

  {
    name: "maxLen",
    description:
      "The field string length under validation must be less than or equal to a maximum.",
    parameters: ["max"],
    notes: ["max parameter must be a positive integer."],
  },

  {
    name: "betweenLen",
    description:
      "The field under validation must have a string length between the given min and max.",
    parameters: ["min", "max"],
    notes: [
      "min and max are inclusive.",
      "min and max parameters must be a positive integer.",
    ],
  },

  {
    name: "alpha",
    description:
      "The field under validation must be entirely alphabetic characters.",
    parameters: [],
  },

  {
    name: "alphaNum",
    description:
      "The field under validation must be entirely alpha-numeric characters.",
    parameters: [],
  },

  {
    name: "alphaDash",
    description:
      "The field under validation may have alpha-numeric characters, as well as dashes and underscores.",
    parameters: [],
  },

  {
    name: "min",
    description:
      "The field number under validation must be greater than or equal to minimum (min).",
    parameters: ["min"],
    notes: [
      "minLen rule is for field string count while min rule is for number validation",
      "min parameter must be a positive integer.",
    ],
  },

  {
    name: "max",
    description:
      "The field number under validation must be less than or equal to a maximum (max).",
    parameters: ["max"],
    notes: [
      "maxLen rule is for field string count while max rule is for number validation",
      "max parameter must be a positive integer.",
    ],
  },

  {
    name: "numeric",
    description: "The field under validation must be numeric.",
    parameters: [],
    notes: ["Can be wholenumber or decimal, and can be positive or negative"],
  },

  {
    name: "integer",
    description:
      "The field under validation must be an integer (whole number).",
    parameters: [],
    notes: ["Can be positive or negative"],
  },

  {
    name: "positive",
    description: "The field under validation must be a positive number.",
    parameters: [],
    notes: ["Can be whole number or with decimal"],
  },

  {
    name: "negative",
    description: "The field under validation must be a negative number.",
    parameters: [],
    notes: ["Can be whole number or with decimal"],
  },

  {
    name: "extensions",
    description:
      "This rule is for file type field. The input selected file/s must be in the specified file extentions.",
    parameters: ["extention1", "extention2", "..."],
    notes: [
      "You can add unlimited file extention names as parameters.",
      "You can use extentions group (<b>audio, video, image, msWord, msExcel, msPowerPoint</b>) as parameter that represents lists of related extention names.",
      "<b>audio</b> group accepts all audio files",
      "<b>video</b> group accepts all video files",
      "<b>image</b> group accepts all image/photo files",
      "<b>msWord</b> group accepts <small>doc, dot, wbk, docx, docm, dotx, dotm, docb</small> extentions",
      "<b>msExcel</b> group accepts xls, xlt, xlm, xlsx, xlsm, xltx, xltm, xlsb, xla, xlam, xll, xlw extentions",
      "<b>msPowerPoint</b> group accepts ppt, pot, pps, pptx, pptm, potx, potm, ppam, ppsx, ppsm, sldx, sldm extentions",
    ],
  },

  {
    name: "maxFS",
    description:
      "Maximum File Size. The selected file under validation must have a maximum file size of the specified max size parameter. (per selected file)",
    parameters: ["maxSize", "sizeUnit"],
    notes: [
      "maxSize expects positive number.",
      "sizeUnit parameter must be <b>bytes, KB, MB, GB</b>",
      "sizeUnit is <i>Optional</i>, <b>bytes</b> is the default value",
    ],
  },

  {
    name: "minFS",
    description:
      "Minimum File Size.  The selected file under validation must have a minimum file size of the specified min size. (per selected file).",
    parameters: ["minSize", "sizeUnit"],
    notes: [
      "minSize expects positive number.",
      "sizeUnit parameter must be <b>bytes, KB, MB, GB</b>",
      "sizeUnit is <i>Optional</i>, <b>bytes</b> is the default value",
    ],
  },

  {
    name: "betweenFS",
    description:
      "Between File Size. The selected file under validation must have a file size between specified.",
    parameters: ["minSize", "maxSize", "sizeUnit"],
    notes: [
      "Min and max are inclusive.",
      "If the file input tag is MULTIPLE, <b><a href='#betweenFS'>betweenFS</a> , <a href='#maxFS'>maxFS</a> and <a href='#minFS'>minFS</a></b> rules validate every selected file (File in <a href='https://developer.mozilla.org/en-US/docs/Web/API/FileList'>FileList</a>)",
      "sizeUnit is <i>Optional</i>, <b>bytes</b> is the default value",
    ],
  },

  {
    name: "maxTFS",
    description:
      "Maximum Total File Size. All selected files under validation must have a maximum TOTAL file size of the specified max size.",
    parameters: ["totalMaxSize", "sizeUnit"],
    notes: [
      "This rule is for <b> input type='file' multiple </b>",
      "This rule will automatically add <b>multiple</b> attribute in the file input tag in the DOM (In case you forgot.)",
    ],
  },

  {
    name: "minTFS",
    description:
      "Minimum Total File Size. All selected files under validation must have a minimum TOTAL file size of the specified min size.",
    parameters: ["totalMinSize", "sizeUnit"],
    notes: [
      "This rule is for <b> input type='file' multiple </b>",
      "This rule will automatically add <b>multiple</b> attribute in the file input tag in the DOM (In case you forgot.)",
    ],
  },

  {
    name: "betweenTFS",
    description:
      "Between Total File Size. All selected files under validation must have a TOTAL file size between specified min and max size.",
    parameters: ["totalMinSize", "totalMaxSize", "sizeUnit"],
    notes: [
      "min and max are inclusive.",
      "This rule is for <b> input type='file' multiple </b>",
      "This rule will automatically add <b>multiple</b> attribute in the file input tag in the DOM (In case you forgot.)",
    ],
  },

  {
    name: "minFiles",
    description:
      "Minimum Selected files. Selected files must be greater than or equl to min files",
    parameters: ["min"],
    notes: ["This rule is for <b> input type='file' multiple </b>"],
  },

  {
    name: "maxFiles",
    description:
      "Maximum Selected files. Selected files must be less than or equl to max files.",
    parameters: ["max"],
    notes: ["This rule is for <b> input type='file' multiple </b>"],
  },

  {
    name: "exactFiles",
    description:
      "Exact Selected files. Selected files must be  equal to exact file count.",
    parameters: ["exactFileCount"],
    notes: ["This rule is for <b> input type='file' multiple </b>"],
  },
];



export default rules;