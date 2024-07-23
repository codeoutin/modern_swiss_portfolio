export async function getServerSideProps() {
    return {
      redirect: {
        destination: 'https://geniaro-b7ovkg3fw-codeoutins-projects.vercel.app/ai/templates',
        permanent: false,
      },
    };
  }
  
  export default function External() {
    // This component will never be rendered because of the redirect
    return null;
  }