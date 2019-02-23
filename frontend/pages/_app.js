import App, { Container } from 'next/app';

class MyApp extends App {
 render() {
     const { Component } = this.props;

     return (
         <container>
              <p> Hey I'm on everypage </p>
              <Component />
         </container>
     )
 }
}
export default MyApp;