## Redirect pages
To avoid linking long URLs you can use a Next.js redirect function

I've linked my long URLs using /r/[page]

### How to generate a new redirect page
1. Create a folder under pages. For example "r" or "redirect"
2. Create a [page].ts file
3. Use this example code
```ts
export async function getServerSideProps() {
  return {
    redirect: {
      destination: 'https://example.com',
      permanent: false,
    },
  };
}

export default function External() {
  // This component will never be rendered because of the redirect
  return null;
}
```