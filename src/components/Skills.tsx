import React from 'react';

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-20 items-center'>
        <div>
          <h2 className='text-4xl md:text-5xl'>Technologies I work with</h2>
          <p className='text-gray-400 pt-2'>
            
I have a solid foundation in web development, specializing in HTML, CSS, and JavaScript. My experience extends to using frameworks like React and Next.js to create dynamic and user-friendly applications. I'm also proficient in Tailwind CSS for efficient styling and design. With a passion for learning, I stay updated on the latest technologies to enhance my skill set and contribute effectively to projects.
          </p>
        </div>
        <div>
          <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
            <div className='space-y-2'>
              <h3>TypeScript</h3>
              <h3>React</h3>
              <h3>Next.js</h3>
              <h3>Tailwind CSS</h3>
              <h3>HTML</h3>
              <h3>CSS</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
