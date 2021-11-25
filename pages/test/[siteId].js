import { getAllFeedback, getAllSites } from "@/lib/db-admin";

export async function getStaticProps(context) {
  const siteId = context.params.siteId;
  const feedback = await getAllFeedback(siteId);

  return {
    props: {
      initialFeedback: feedback,
    }, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  const sites = await getAllSites();
  const paths = sites.map((site) => ({
    params: { siteId: site.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
}

const SiteFeedback = () => {
  return "hellowww mate";
};

export default SiteFeedback;
