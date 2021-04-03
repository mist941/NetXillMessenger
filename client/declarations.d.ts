declare module '*.png';
declare module '*.scss';
declare module '*.svg' {
  const content: string;
  export default content;
}
