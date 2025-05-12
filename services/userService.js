const bcrypt = require('bcrypt');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createUser = async ({ name, email, password }) => {
    const hashedPassword = await bcrypt.hash(password, 10); // saltRounds = 10
    return await prisma.user.create({
        data: { name, email, password: hashedPassword }
  });
};

const findUserByEmail = async (email) => {
  return await prisma.user.findUnique({
    where: { email }
  });
};

module.exports = { createUser, findUserByEmail };