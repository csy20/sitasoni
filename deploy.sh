#!/bin/bash

# SITASONI TREND - Deployment Script
# This script helps prepare the project for deployment to Vercel

echo "🚀 Preparing SITASONI TREND for deployment..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: This script must be run from the project root directory"
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Run build to check for errors
echo "🏗️ Building the project..."
if npm run build; then
    echo "✅ Build successful!"
else
    echo "❌ Build failed. Please fix the errors before deploying."
    exit 1
fi

# Clean up
echo "🧹 Cleaning up..."
rm -rf .next

echo "✅ Project is ready for deployment!"
echo ""
echo "🔧 Next steps:"
echo "1. Make sure your environment variables are set in Vercel dashboard"
echo "2. Connect your repository to Vercel"
echo "3. Deploy with 'vercel' command or through the dashboard"
echo ""
echo "📋 Required environment variables for Vercel:"
echo "- MONGODB_URI"
echo "- NEXTAUTH_SECRET"
echo "- JWT_SECRET"
echo "- CLOUDINARY_CLOUD_NAME (optional, for image upload)"
echo "- CLOUDINARY_API_KEY (optional)"
echo "- CLOUDINARY_API_SECRET (optional)"
echo ""
echo "🌐 Your app will be available at: https://your-app-name.vercel.app"
