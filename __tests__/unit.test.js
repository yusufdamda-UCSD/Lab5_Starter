// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

test('valid phone number 1', () => {
    expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('valid phone number 2', () => {
    expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('invalid phone number 1', () => {
    expect(isPhoneNumber('hello')).toBe(false);
});

test('invalid phone number 2', () => {
    expect(isPhoneNumber('123')).toBe(false);
});

//email

test('valid email 1', () => {
    expect(isEmail('student@ucsd.edu')).toBe(true);
});

test('valid email 2', () => {
    expect(isEmail('yusuf@gmail.com')).toBe(true);
});

test('invalid email 1', () => {
    expect(isEmail('studentucsd.edu')).toBe(false);
});

test('invalid email 2', () => {
    expect(isEmail('student@ucsd')).toBe(false);
});

//isStrongPassword

test('valid password 1', () => {
    expect(isStrongPassword('abcd')).toBe(true);
});

test('valid password 2', () => {
    expect(isStrongPassword('Yusuf_123')).toBe(true);
});

test('invalid password 1', () => {
    expect(isStrongPassword('12abcd')).toBe(false);
});

test('invalid password 2', () => {
    expect(isStrongPassword('ab')).toBe(false);
});

//isDate

test('valid date 1', () => {
    expect(isDate('12/24/2025')).toBe(true);
});

test('valid date 2', () => {
    expect(isDate('1/9/2024')).toBe(true);
});

test('invalid date 1', () => {
    expect(isDate('2025/12/22')).toBe(false);
});

test('invalid date 2', () => {
    expect(isDate('Yusuf')).toBe(false);
});

//isHexColor

test('valid hex color 1', () => {
    expect(isHexColor('#FFF')).toBe(true);
});

test('valid hex color 2', () => {
    expect(isHexColor('#A1B2C3')).toBe(true);
});

test('invalid hex color 1', () => {
    expect(isHexColor('ZZZ')).toBe(false);
});

test('invalid hex color 2', () => {
    expect(isHexColor('#12345')).toBe(false);
});