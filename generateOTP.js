const otpGenerator = require('otp-generator');

function generateOTP()
{
    const OTP = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false, lowerCaseAlphabets:false });
    return OTP;
}

module.exports =  generateOTP;
