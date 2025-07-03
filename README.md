# SITASONI TREND - Fashion E-commerce Website

A modern, full-stack e-commerce website built with Next.js, MongoDB, and TypeScript. Features include user authentication, admin panel, product management with drag-and-drop image upload, and beautiful animations.

## 🚀 Features

- **Beautiful UI/UX**: Modern design with smooth animations using Framer Motion
- **User Authentication**: Login/Register with JWT-based authentication
- **Role-based Access**: Admin and user roles with different permissions
- **Product Management**: 
  - Admin can add, edit, delete products
  - Drag and drop image upload
  - Multiple product images support
  - Category, size, and color management
- **Shopping Experience**: 
  - Product browsing with filters and search
  - Shopping cart with persistent storage
  - Add/remove items, quantity management
  - Real-time cart updates in navbar
  - Secure checkout process
- **Order Management**: 
  - Complete order processing
  - Order history for users
  - Admin order monitoring and status updates
- **User Dashboard**: Profile management and order tracking
- **Responsive Design**: Works perfectly on desktop and mobile
- **Database**: MongoDB with Mongoose ODM
- **Deployment Ready**: Configured for Vercel deployment

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, MongoDB, Mongoose
- **Authentication**: JWT, bcryptjs
- **UI Components**: Radix UI, Lucide React Icons
- **Animations**: Framer Motion
- **File Upload**: React Dropzone
- **Deployment**: Vercel

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sitasoni
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory:
   ```env
   MONGODB_URI=mongodb+srv://chitreshy20:u2hNL9nd7DLP7XKM@cluster0.8k7chsq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-secret-key-here-replace-with-strong-random-string
   JWT_SECRET=your-jwt-secret-key-replace-with-strong-random-string
   CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
   CLOUDINARY_API_KEY=your-cloudinary-api-key
   CLOUDINARY_API_SECRET=your-cloudinary-api-secret
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Seed sample data (optional)**
   Visit `http://localhost:3000/api/seed` to create sample products and admin user

## 🔐 Admin Access

After seeding data, you can login as admin with:
- **Email**: admin@sitasoni.com
- **Password**: admin123

## 🚀 Deployment to Vercel

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [Vercel Dashboard](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables:
     - `MONGODB_URI`
     - `NEXTAUTH_SECRET`
     - `JWT_SECRET`
     - `NEXTAUTH_URL` (set to your Vercel domain)

3. **Optional: Add Cloudinary for image upload**
   - Sign up for [Cloudinary](https://cloudinary.com)
   - Add Cloudinary environment variables to Vercel

## 📁 Project Structure

```
src/
├── app/
│   ├── admin/              # Admin panel
│   ├── api/                # API routes
│   │   ├── auth/           # Authentication endpoints
│   │   ├── products/       # Product CRUD operations
│   │   ├── orders/         # Order management
│   │   └── seed/           # Sample data seeding
│   ├── auth/               # Authentication page
│   ├── cart/               # Shopping cart page
│   ├── profile/            # User profile and order history
│   ├── shop/               # Product listing page
│   └── globals.css         # Global styles
├── components/             # Reusable components
│   ├── LoadingAnimation.tsx
│   └── Navbar.tsx
├── contexts/               # React contexts
│   └── CartContext.tsx     # Shopping cart state management
├── lib/                    # Utility functions
│   ├── auth.ts             # Authentication helpers
│   ├── mongodb.ts          # Database connection
│   └── utils.ts            # General utilities
└── models/                 # MongoDB models
    ├── User.ts
    ├── Product.ts
    └── Order.ts
```

## 🎨 Features Overview

### 1. Loading Animation
Beautiful branded loading animation with company logo and smooth transitions.

### 2. Homepage
- Hero section with gradient background
- Feature highlights
- Category showcase
- Newsletter signup
- Responsive footer

### 3. Authentication
- Combined login/register form
- Role-based redirects (admin to admin panel, users to shop)
- Secure JWT-based authentication

### 4. Shop Page
- Product grid/list view toggle
- Search and filter functionality
- Category filtering
- Pagination
- Add to cart functionality

### 5. Shopping Cart
- Persistent cart storage using localStorage
- Add/remove items with quantity controls
- Real-time cart count in navigation
- Cart page with order summary
- Secure checkout process

### 6. User Profile
- View and manage personal information
- Complete order history
- Order status tracking
- Easy navigation to cart and admin panel (for admins)

### 5. Admin Panel
- Dashboard with statistics
- Product management with CRUD operations
- Drag and drop image upload
- Order monitoring
- Rich product form with multiple attributes

## 🔧 Customization

### Adding New Product Categories
1. Update the `categories` array in the Product model
2. Add new categories to the admin panel and shop filters
3. Update navigation menu if needed

### Styling
- Modify `tailwind.config.js` for custom colors/themes
- Update `globals.css` for global style changes
- Component styles are in individual files using Tailwind

### Database Schema
- Models are in the `src/models/` directory
- Use Mongoose for schema validation and relationships

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Check the documentation
- Review the code comments

---

**SITASONI TREND** - Fashion Forward, Style Elevated 🌟
