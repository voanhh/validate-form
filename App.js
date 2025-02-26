import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

const PhoneNumberValidation = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validatePhoneNumber = (phone) => {
    // Biểu thức Regex kiểm tra số điện thoại Việt Nam
    const phoneRegex = /^(0[3|5|7|8|9])+([0-9]{8})$/;
    
    if (phoneRegex.test(phone)) {
      setErrorMessage('Số điện thoại hợp lệ!');
    } else {
      setErrorMessage('Số điện thoại không hợp lệ!');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: 'grey',
        fontSize: 30,
        fontWeight: 10,
        paddingBottom: 10,
        marginBottom: 40,
      }}>Đăng nhập</Text>
      <View>
        <Text
        style={{
          fontSize: 20,
        }}>Nhập số điện thoại</Text>
        <Text
        style={{
          fontSize: 15,
          marginTop: 10,
        }}>Dùng số điện thoại để đăng nhập hoặc đăng kí tài khoản tại OneHousing Pro</Text>
      </View>


      <TextInput  
        placeholder="Nhập số điện thoại"
        keyboardType="numeric"
        onChangeText={validatePhoneNumber}
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginTop: 40,
          marginBottom: 10,
          paddingHorizontal: 10,
        }}
      />
      <Button title="Kiểm tra"/>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
    </View>
  );
};

export default PhoneNumberValidation;
