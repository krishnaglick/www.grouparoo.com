import { useEffect } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import Image from "../components/Image";
import Head from "next/head";
import Link from "next/link";
import HomepageCodeBox from "../components/home/homepageCodeBox";
import IntegrationsSection from "../components/home/integrationsSection";
import SmallIntegration from "../components/home/smallIntegration";
import WhyOpenSource from "../components/home/whyOpenSource";
import CustomerTestimonials from "../components/home/customerTestimonials";
import { randomHomepagePlugins } from "../data/plugins";
import { getReleaseNotes } from "../utils/releaseNotes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImageInBrowserFrame from "../components/imageInBrowserFrame";

export default function IndexPage({ pageProps, setReleaseNote }) {
  const {
    pluginNames,
    releaseNote,
  }: { pluginNames: string[]; releaseNote: any } = pageProps;
  const title = "Grouparoo: Open Source Data Synchronization Framework";
  const description =
    "Grouparoo is an open source framework that helps you move data between your data warehouse and all of your cloud-based tools.";
  const pluginName =
    pluginNames[Math.floor(Math.random() * pluginNames.length)];
  const tagline = `Stop writing code to sync data to ${pluginName}*`;

  useEffect(() => setReleaseNote(releaseNote), []);

  return (
    <>
      <Head>
        {/* Title */}

        <title>{title}</title>
        <meta name="og:title" content={title} />
        <meta property="og:site_name" content="Grouparoo" />
        <meta property="og:url" content="https://www.grouparoo.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:site" content="@grouparoo" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Image */}

        <meta
          property="og:image"
          content="https://www.grouparoo.com/_next/image?url=%2Fimages%2Fhome%2Ftwitter-og-image.png&w=1920&q=75"
        />
        <meta
          name="twitter:image"
          content="https://www.grouparoo.com/_next/image?url=%2Fimages%2Fhome%2Ftwitter-og-image.png&w=1920&q=75"
        />
        <meta name="twitter:image:alt" content={title} />

        {/* Description */}

        <meta name="description" content={description} />
        <meta name="twitter:description" content={description} />
        <meta name="og:description" content={description} />

        <link rel="canonical" href="https://www.grouparoo.com/" />
      </Head>

      <div
        id="headline"
        className="homePageSection"
        style={{ textAlign: "center", paddingTop: 0, paddingBottom: 20 }}
      >
        <Container>
          <Row className="pt-5 pb-2">
            <Col>
              <h1 data-testid="header" suppressHydrationWarning={true}>
                {tagline}
              </h1>
            </Col>
          </Row>
          <Row className="pb-5">
            <Col lg={2} />
            <Col lg={8}>
              <p className="text-big-muted">{description}</p>
            </Col>
            <Col lg={2} />
          </Row>

          <br />

          <Row>
            <Col>
              <Button
                size="lg"
                variant="primary"
                style={{ padding: ".5rem 1rem" }}
                href="/get-started"
                className="ml-auto"
              >
                Get Started
              </Button>
            </Col>
          </Row>

          <br />
          <br />
          <br />
          <br />

          <Row className="pb-5">
            <Col md={12}>
              <small>
                <p>
                  <em>
                    * Sorry,{" "}
                    <Link
                      href={`/integrations/destinations/${pluginName.toLowerCase()}`}
                    >
                      <a suppressHydrationWarning={true}>{pluginName}</a>
                    </Link>{" "}
                    - we don't mean to pick on you specifically. We integrate
                    with{" "}
                    <Link href="/integrations">
                      <a>lots of marketing, operations, and sales tools</a>
                    </Link>
                    .
                  </em>
                </p>
              </small>
            </Col>
          </Row>
        </Container>
      </div>

      <div
        id="synchronize"
        style={{
          textAlign: "center",
          backgroundImage: "linear-gradient(#242436,#43435F)",
        }}
        className="text-white homePageSection"
      >
        <Container>
          <Row>
            <Col>
              <br />
              <h2>Reverse ETL makes your data warehouse actionable</h2>
              <p>
                Grouparoo connects your customer data to all the places where it
                can make a difference. Use your data warehouse to power
                marketing campaigns, customer service, and everything else your
                business needs to succeed.
                <br />
                <small>
                  <Link href="/solutions/reverse-etl">
                    <a>Learn more about reverse ETL</a>
                  </Link>
                </small>
              </p>
              <br />
              <Image
                centered
                src="/images/home/hero-diagram.svg"
                alt="Grouparoo sources and destination connections"
                width={1260}
                height={535}
              />
            </Col>
          </Row>
        </Container>
      </div>

      <div id="value-prop" className="homePageSection">
        <Container>
          <br />
          <br />

          <Row className="align-items-center">
            <Col md={6}>
              <h3>Free and Easy to Install</h3>
              <p>
                Try Grouparoo on your computer today or install it on your
                company’s servers. Your data stays private on your servers. No
                usage or storage limits.
              </p>
            </Col>
            <Col>
              <HomepageCodeBox
                icon="npm"
                code={
                  <>
                    {`$`} npm install -g grouparoo
                    <br />
                    {`$`} grouparoo init .
                    <br />
                    {`$`} grouparoo start
                  </>
                }
              />
            </Col>
          </Row>

          <br />
          <br />

          <Row className="align-items-center">
            <Col md={6} className="d-none d-md-block">
              <Row className="align-items-center">
                <Col />
                <Col>
                  <br />
                  <br />
                  <br />
                  <SmallIntegration
                    name="MySQL"
                    slug="mysql"
                    image="mysql.png"
                  />
                  <SmallIntegration
                    name="Snowflake"
                    slug="snowflake"
                    image="snowflake.png"
                  />
                </Col>
                <Col>
                  <SmallIntegration
                    name="Postgres"
                    slug="postgres"
                    image="postgres.svg"
                  />
                  <SmallIntegration
                    name="BigQuery"
                    slug="bigquery"
                    image="bigquery.png"
                  />
                </Col>
                <Col />
              </Row>
            </Col>
            <Col md={6}>
              <h3>Use verified data</h3>
              <p>
                You've spent a lot of time ensuring that your data warehouse has
                the correct data. Now you can use it to generate real value for
                your company. The same data that your business uses to make
                decisions can now also be used to act.
              </p>
            </Col>
            <Col md={6} className="d-md-none">
              <Row className="align-items-center">
                <Col>
                  <SmallIntegration
                    name="MySQL"
                    slug="mysql"
                    image="mysql.png"
                    fillWidth={true}
                  />
                  <SmallIntegration
                    name="Redshift"
                    slug="redshift"
                    image="redshift.svg"
                    fillWidth={true}
                  />
                </Col>
                <Col>
                  <SmallIntegration
                    name="Postgres"
                    slug="postgres"
                    image="postgres.svg"
                    fillWidth={true}
                  />
                  <SmallIntegration
                    name="BigQuery"
                    slug="bigquery"
                    image="bigquery.png"
                    fillWidth={true}
                  />
                </Col>
              </Row>
            </Col>
          </Row>

          <br />

          <Row className="align-items-center">
            <Col md={6}>
              <h3>Connect new tools quickly and easily</h3>
              <p>
                Marketing, Sales, Customer Support and other teams are trying
                new tools all the time. Instead of building and maintaining all
                of these integrations, use Grouparoo's pre-built connectors.
              </p>
            </Col>
            <Col md={6}>
              <Row className="align-items-center">
                <Col className="d-none d-md-block" />
                <Col className="d-none d-md-block">
                  <SmallIntegration
                    name="Mailchimp"
                    slug="mailchimp"
                    image="mailchimp.svg"
                  />
                  <SmallIntegration
                    name="Marketo"
                    slug="marketo"
                    image="marketo.png"
                  />
                </Col>
                <Col className="d-md-none">
                  <SmallIntegration
                    name="Mailchimp"
                    slug="mailchimp"
                    fillWidth={true}
                    image="mailchimp.svg"
                  />
                  <SmallIntegration
                    name="Marketo"
                    slug="marketo"
                    fillWidth={true}
                    image="marketo.png"
                  />
                </Col>
                <Col className="d-none d-md-block">
                  <br />
                  <br />
                  <br />

                  <SmallIntegration
                    name="Salesforce"
                    slug="salesforce"
                    image="salesforce.png"
                  />
                  <SmallIntegration
                    name="Zendesk"
                    slug="zendesk"
                    image="zendesk.svg"
                  />
                </Col>
                <Col className="d-md-none">
                  <SmallIntegration
                    name="Salesforce"
                    slug="salesforce"
                    fillWidth={true}
                    image="salesforce.png"
                  />
                  <SmallIntegration
                    name="Zendesk"
                    slug="zendesk"
                    fillWidth={true}
                    image="zendesk.svg"
                  />
                </Col>
                <Col className="d-none d-md-block" />
              </Row>
            </Col>
          </Row>

          <br />

          <Row className="align-items-center">
            <Col
              className="d-none d-md-block"
              md={6}
              style={{ textAlign: "center" }}
            >
              <Image
                centered
                src="/images/home/github.png"
                alt="Github Logo"
                height={100}
                width={100}
              />
            </Col>
            <Col md={6}>
              <h3>Open source</h3>
              <p>
                Maintain control over your data and infrastructure so you’re
                never locked in. While a dedicated team is building and
                maintaining Grouparoo, we welcome the developer community to
                contribute and improve it as well.
              </p>
              <p>
                <iframe
                  src="https://ghbtns.com/github-btn.html?user=grouparoo&repo=grouparoo&type=star&count=true"
                  frameBorder="0"
                  scrolling="0"
                  width="150"
                  height="20"
                  title="GitHub"
                ></iframe>
              </p>
            </Col>
            <Col className="d-md-none" md={6} style={{ textAlign: "center" }}>
              <Image
                src="/images/home/github.png"
                alt="Github Logo"
                width={100}
                height={100}
              />
            </Col>
          </Row>

          <br />

          <Row className="align-items-center">
            <Col md={6}>
              <h3>Best Practices &amp; Batteries Included</h3>
              <p>
                With built-in support for edges cases like rate-limiting and
                retrying, you will be ready for whatever problems{" "}
                <em>The Cloud</em> can throw at you. Grouparoo can be run on
                your laptop or scale across many servers to increase throughput.
              </p>
            </Col>
            <Col md={6} style={{ textAlign: "center" }}>
              <br />
              <FontAwesomeIcon color="black" icon={"battery-full"} size="5x" />
            </Col>
          </Row>
        </Container>
      </div>

      <br />
      <CustomerTestimonials />

      <div
        id="how-grouparoo-works"
        style={{ backgroundImage: "linear-gradient(#242436,#43435F)" }}
        className="bg-dark text-white homePageSection"
      >
        <Container>
          <Row style={{ textAlign: "center" }}>
            <Col>
              <h2>How Grouparoo Works</h2>
              <br />
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col md={4}>
              <div>
                <h3 className="homepageBlueH3">
                  Create Unified Customer Profiles
                </h3>
                <p>
                  Create a single view of your customers from all of your data
                  sources. Define what data you care about either with Code or
                  in our Enterprise UI.
                </p>
              </div>
            </Col>
            <Col md={8}>
              <ImageInBrowserFrame
                src="/images/home/how-it-works-1.png"
                alt="Grouparoo profile"
                width={650}
                height={398}
              />
            </Col>
          </Row>
          <br />
          <Row className="align-items-center">
            <Col md={4}>
              <h3 className="homepageBlueH3">Create Groups</h3>
              <p>
                Point and click to explore segmentation. Find out the size of
                the group in seconds, not hours. Use your group definitions
                across destinations.
              </p>
            </Col>
            <Col md={8}>
              <ImageInBrowserFrame
                src="/images/home/how-it-works-2.png"
                alt="Grouparoo groups"
                width={650}
                height={398}
              />
            </Col>
          </Row>
          <br />
          <Row className="align-items-center">
            <Col md={4}>
              <h3 className="homepageBlueH3">Send to Destinations</h3>
              <p>
                Integrations make it easy to send the right data to each tool
                you use. No code is necessary to change what data gets sent
              </p>
            </Col>
            <Col md={8}>
              <ImageInBrowserFrame
                src="/images/home/how-it-works-3.png"
                alt="Grouparoo destination"
                width={650}
                height={398}
              />
            </Col>
          </Row>
          <br />
          <Row className="align-items-center">
            <Col md={4}>
              <h3 className="homepageBlueH3">
                Use Group Definitions in your product and in your marketing
                tools
              </h3>
              <p>
                Run campaigns in the marketing and business tools of your
                choice. Switch providers easily without needing to rebuild
                integrations. Send Groups and Profiles
              </p>
            </Col>
            <Col md={8}>
              <ImageInBrowserFrame
                src="/images/home/how-it-works-4.png"
                alt="Data synced to destination"
                width={650}
                height={398}
              />
            </Col>
          </Row>
        </Container>
      </div>

      <IntegrationsSection />

      <WhyOpenSource />

      <div
        id="productFeatures"
        className="bg-dark text-white homePageSection"
        style={{ textAlign: "left" }}
      >
        <Container>
          <div style={{ textAlign: "center" }}>
            <h3>Features that embed in your workflow</h3>
            <p>Grouparoo makes it easy to follow developer best practices.</p>
          </div>

          <br />
          <Row>
            <Col md={4}>
              <FontAwesomeIcon color="white" icon={"wrench"} size="1x" />
              <strong> Pre-built integrations</strong>
              <br />
              <p>
                All of the integration code is already written, so all of the
                nuances like rate limits, API requirements, and others are
                covered.
              </p>
            </Col>
            <Col md={4}>
              <FontAwesomeIcon color="white" icon={"chart-line"} size="1x" />
              <strong> Observability</strong>
              <br />
              <p>
                Charts, tools, and data to help you monitor your Grouparoo
                instance.
              </p>
            </Col>
            <Col md={4}>
              <FontAwesomeIcon color="white" icon={"vial"} size="1x" />
              <strong> Testable</strong>
              <br />
              <p>
                Write automated tests, so you can verify that the data is being
                imported and exported as you'd expect.
              </p>
            </Col>
          </Row>

          <Row>
            <Col md={4}>
              <FontAwesomeIcon color="white" icon={"tasks"} size="1x" />
              <strong> Many deploy options</strong>
              <br />
              <p>
                Deploy easily using Heroku, Kubernetes, or Docker, or through
                your own deploy process.
              </p>
            </Col>
            <Col md={4}>
              <FontAwesomeIcon color="white" icon={"shoe-prints"} size="1x" />
              <strong> Conventions</strong>
              <br />
              <p>
                Maintainable conventions so everyone on the team can easily
                understand and modify Grouparoo.
              </p>
            </Col>
            <Col md={4}>
              <FontAwesomeIcon color="white" icon={"layer-group"} size="1x" />
              <strong> Open Source and Extensible</strong>
              <br />
              <p>
                Grouparoo is open source, so you can look under the hood to see
                how everything works and extend it to your needs.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const pluginNames = randomHomepagePlugins();
  const { notes } = await getReleaseNotes(1, 1);
  return { props: { pluginNames, releaseNote: notes[0] } };
}
