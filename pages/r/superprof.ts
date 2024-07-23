export async function getServerSideProps() {
    return {
      redirect: {
        destination: 'https://www.superprof.de/software-engineer-mit-jahren-ausbildung-jahren-berufserfahrung-gibt-programmierunterricht-mentoring-anfanger-und.html',
        permanent: false,
      },
    };
  }
  
  export default function External() {
    // This component will never be rendered because of the redirect
    return null;
  }