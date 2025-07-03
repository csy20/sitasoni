import { NextRequest, NextResponse } from 'next/server';
import { hashPassword, comparePassword } from '@/lib/auth';

export async function POST() {
  try {
    const testPassword = "Jaggu@20";
    
    // Hash the password
    const hashedPassword = await hashPassword(testPassword);
    console.log('Hashed password:', hashedPassword);
    
    // Test comparison
    const isValid = await comparePassword(testPassword, hashedPassword);
    console.log('Password comparison result:', isValid);
    
    // Test with wrong password
    const isInvalid = await comparePassword("wrongpassword", hashedPassword);
    console.log('Wrong password comparison:', isInvalid);
    
    return NextResponse.json({
      message: "Password testing completed",
      results: {
        originalPassword: testPassword,
        hashedPassword: hashedPassword,
        correctPasswordTest: isValid,
        wrongPasswordTest: isInvalid
      }
    });
  } catch (error) {
    console.error('Password test error:', error);
    return NextResponse.json(
      { error: 'Password test failed', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
