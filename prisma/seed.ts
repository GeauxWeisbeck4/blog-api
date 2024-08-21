// eslint-disable-next-line prettier/prettier
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const post1 = await prisma.article.upsert({
    where: { title: 'Hello World from Geaux Code' },
    update: {},
    create: {
      title: 'Hello World from Geaux Code',
      body: 'Thank you for reading my new blog, Geaux Code. This post is my way of introducing my latest creation and explaining to my readers why you will find this blog interesting.',
      description: 'Introducing my latest blog creation, Geaux Code.',
      published: false,
    },
  });

  const post2 = await prisma.article.upsert({
    where: { title: 'Nest.js, Prisma, and PostgreSQL API Tutorial' },
    update: {},
    create: {
      title: 'Nest.js, Prisma, and PostgreSQL API Tutorial',
      body: 'Creating APIs can be an arduous task if you try to do it from scratch. That is why I suggest using a framework like Nest.js to make API development easier on yourself. Follow along with this tutorial as I show you how to create an API with one of my favorite tech stacks.',
      description:
        'A tutorial on how to create APIs with Nest.js, Prisma, and PostgreSQL.',
      published: false,
    },
  });

  const post3 = await prisma.article.upsert({
    where: { title: 'Creating a Blog with Astro' },
    update: {},
    create: {
      title: 'Creating a Blog with Astro',
      body: 'Astro is one of the most efficient web frameworks out there, especially for content sites. Learn how to make a blog by following the tutorial in this blog post.',
      description:
        'A tutorial on how to create a blog using Astro.',
      published: true,
    },
  });

  console.log({ post1, post2 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
