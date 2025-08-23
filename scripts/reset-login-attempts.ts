import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Reset login attempts and unlock the account
  await prisma.user.updateMany({
    data: {
      loginAttempts: 0,
      lockedUntil: null
    }
  });

  // Clear login attempt logs
  await prisma.loginAttempt.deleteMany({});

  console.log('Successfully reset login attempts and unlocked account');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
