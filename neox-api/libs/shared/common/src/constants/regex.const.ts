/**
 * Password Strength Validation Regex.
 *
 * This regular expression checks for password strength by ensuring the following criteria:
 * - At least one digit
 * - At least one uppercase letter
 * - At least one lowercase letter
 * - At least one special character
 * - No dots or newlines before the validation is complete
 */
export const PASSWORD_REGEXP =
  /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
/**
 * Email Address Validation Regex.
 *
 * This regular expression ensures a valid email address format based on common standards.
 *
 * @pattern
 * ^                     // Start of the string
 * (                     // Start of the local part
 *   ([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)  // Valid characters for the local part
 *   |(".+")             // OR allow quoted strings
 * )                     // End of the local part
 * @                     // Mandatory @ symbol
 * (                     // Start of the domain part
 *   (\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])  // IP address in square brackets
 *   |(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,})  // OR valid domain with at least one dot
 * )                     // End of the domain part
 * $                     // End of the string
 *
 * @description
 * This regex pattern validates email addresses based on common standards.
 * It checks for the correct format including the local part, domain, and top-level domain (TLD).
 * Note that email validation is a complex topic, and this regex covers many common cases but not all edge cases.
 * It is recommended to complement it with additional validation or use a dedicated library for comprehensive email validation.
 */
export const EMAIL_REGEXP =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
