import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import User from '@/models/User';
import { hashPassword } from '@/lib/auth';

export async function POST() {
  try {
    console.log('Creating admin user...');
    await connectToDatabase();
    console.log('Database connected');

    // Check if admin already exists
    const existingAdmin = await User.findOne({ email: "jageshwarsahu910@gmail.com" });
    if (existingAdmin) {
      console.log('Admin user already exists');
      return NextResponse.json({
        message: "Admin user already exists",
        admin: {
          email: existingAdmin.email,
          name: existingAdmin.name,
          role: existingAdmin.role
        }
      });
    }

    // Create admin user
    const hashedPassword = await hashPassword("Jaggu@20");
    const adminUser = await User.create({
      name: "Jageshwar Sahu",
      email: "jageshwarsahu910@gmail.com",
      password: hashedPassword,
      role: "admin",
    });

    console.log('Admin user created successfully');
    return NextResponse.json({
      message: "Admin user created successfully",
      admin: {
        email: adminUser.email,
        name: adminUser.name,
        role: adminUser.role,
        password: "Jaggu@20"
      }
    });
  } catch (error) {
    console.error('Error creating admin user:', error);
    return NextResponse.json(
      { error: 'Failed to create admin user', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
