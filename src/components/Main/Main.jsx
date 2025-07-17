import React from 'react';
import s from './Main.module.css';

const Main = ({ children, title = 'Main Content' }) => {
  return (
    <section className={s.content}>
      <h1>{title}</h1>
      {children}
      <h3>Welcome to the Keyboard Fan Screen App</h3>
      <p>Here you can find information about your favorite peripherals.</p>
      <p>Click the button to increase the count.</p>
      <h3>Welcome to the Keyboard Fan Screen App</h3>
      <p>Here you can find information about your favorite peripherals.</p>
      <p>Click the button to increase the count.</p>
      <h3>Welcome to the Keyboard Fan Screen App</h3>
      <p>Here you can find information about your favorite peripherals.</p>
      <p>Click the button to increase the count.</p>
      <p>Current count: </p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus expedita quisquam labore maiores reprehenderit ullam consequuntur, cupiditate optio incidunt id, iusto quae. Nostrum eum facere obcaecati sunt saepe perferendis inventore.</p>
    </section>
  );
};

export default Main;
