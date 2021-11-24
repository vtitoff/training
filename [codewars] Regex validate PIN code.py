def validate_pin(pin):
    for i in pin:
        if i not in ['0','1','2','3','4','5','6','7','8','9']:
            return False
    if len(pin)==4 or len(pin)==6:
        return True
    return False

print(validate_pin('1234'))

# ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

# If the function is passed a valid PIN string, return true, else return false.

# Examples
# "1234"   -->  true
# "12345"  -->  false
# "a234"   -->  false