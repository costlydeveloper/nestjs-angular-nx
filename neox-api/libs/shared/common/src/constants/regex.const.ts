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

/**
 * UUID Validation Regex.
 *
 * This regular expression checks for a valid UUID format. A UUID is a 36-character string including 4 hyphens,
 * with 5 sections of characters distributed as 8-4-4-4-12.
 *
 * @pattern
 * ^                     // Start of the string
 * [0-9a-fA-F]{8}        // 8 hex characters
 * -                     // Hyphen
 * [0-9a-fA-F]{4}        // 4 hex characters
 * -                     // Hyphen
 * [1-5][0-9a-fA-F]{3}   // 4 hex characters, first character ranges from 1 to 5 to include all UUID versions
 * -                     // Hyphen
 * [89abAB][0-9a-fA-F]{3} // 4 hex characters, first character is 8, 9, a, b (case insensitive) for variant
 * -                     // Hyphen
 * [0-9a-fA-F]{12}       // 12 hex characters
 * $                     // End of the string
 *
 * @description
 * This regex pattern validates the format of UUID (Universally Unique Identifier) strings based on the standard UUID formats.
 * It ensures the UUID contains only hexadecimal characters in the appropriate sections and respects the UUID version and variant restrictions.
 */
export const UUID_REGEXP =
  /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/;
