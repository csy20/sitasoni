import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import Product from '@/models/Product';
import User from '@/models/User';
import { hashPassword } from '@/lib/auth';

const sampleProducts = [
  {
    name: "Classic Denim Jacket",
    description: "A timeless denim jacket perfect for layering. Made from premium cotton denim with a vintage wash finish.",
    price: 89.99,
    category: "men",
    images: ["https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=500"],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blue", "Black"],
    stock: 25,
    featured: true,
  },
  {
    name: "Floral Summer Dress",
    description: "Elegant floral print dress perfect for summer occasions. Lightweight and comfortable fabric.",
    price: 75.50,
    category: "women",
    images: ["https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500"],
    sizes: ["XS", "S", "M", "L"],
    colors: ["Pink", "White", "Blue"],
    stock: 18,
    featured: true,
  },
  {
    name: "Kids Colorful T-Shirt",
    description: "Fun and colorful t-shirt for kids. Soft cotton material that's comfortable for active play.",
    price: 24.99,
    category: "kids",
    images: ["https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=500"],
    sizes: ["XS", "S", "M"],
    colors: ["Red", "Blue", "Green", "Yellow"],
    stock: 30,
    featured: false,
  },
  {
    name: "Leather Crossbody Bag",
    description: "Stylish leather crossbody bag perfect for everyday use. Genuine leather with adjustable strap.",
    price: 125.00,
    category: "accessories",
    images: ["https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"],
    sizes: ["One Size"],
    colors: ["Brown", "Black", "Tan"],
    stock: 15,
    featured: true,
  },
  {
    name: "Casual Cotton Shirt",
    description: "Comfortable cotton shirt for everyday wear. Breathable fabric with a modern fit.",
    price: 45.00,
    category: "men",
    images: ["https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Blue", "Gray"],
    stock: 22,
    featured: false,
  },
  {
    name: "Elegant Evening Gown",
    description: "Sophisticated evening gown perfect for special occasions. Premium fabric with elegant design.",
    price: 199.99,
    category: "women",
    images: ["https://images.unsplash.com/photo-1566479179817-c0efefd95e1a?w=500"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Burgundy"],
    stock: 8,
    featured: true,
  }
];

export async function POST() {
  try {
    await connectToDatabase();

    // Create admin user if it doesn't exist
    const adminEmail = "jageshwarsahu910@gmail.com";
    let adminUser = await User.findOne({ email: adminEmail });

    if (!adminUser) {
      const hashedPassword = await hashPassword("Jaggu@20");
      adminUser = await User.create({
        name: "Jageshwar Sahu",
        email: adminEmail,
        password: hashedPassword,
        role: "admin",
      });
    }

    // Clear existing products
    await Product.deleteMany({});

    // Create sample products
    const createdProducts = await Product.insertMany(sampleProducts);

    return NextResponse.json({
      message: "Sample data created successfully!",
      admin: {
        email: adminUser.email,
        password: "Jaggu@20",
        note: "Use these credentials to login as admin"
      },
      productsCreated: createdProducts.length,
      products: createdProducts
    });
  } catch (error) {
    console.error('Seed data error:', error);
    return NextResponse.json(
      { error: 'Failed to create sample data' },
      { status: 500 }
    );
  }
}
