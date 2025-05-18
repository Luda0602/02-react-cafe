declare module "modern-normalize";
// для .module.css файлів
declare module '*.module.css' {
    const classes: { [key: string]: string };
    export default classes;
  }
  
  // для звичайних CSS-файлів, таких як index.css
  declare module '*.css';
  