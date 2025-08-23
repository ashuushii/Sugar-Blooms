import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const username = process.env.ADMIN_USERNAME || 'admin';
  const password = process.env.ADMIN_PASSWORD || 'sugarbloomsadmin';

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    // Create or update the admin user
    const user = await prisma.user.upsert({
      where: { username },
      update: {
        password: hashedPassword,
      },
      create: {
        username,
        password: hashedPassword,
        email: 'admin@sugarbloooms.com',
        role: 'admin',
      },
    });

    console.log('Admin user created/updated successfully:', user.username);
  } catch (error) {
    console.error('Error creating admin user:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
