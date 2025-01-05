//import Image from "next/image";
import {
    PageActions,
    PageHeader,
    PageHeaderDescription,
    PageHeaderHeading,
} from "@/components/page-header"
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
      <PageHeader>
        {/*<Announcement />*/}
        <PageHeaderHeading>Empowering your workforce with us</PageHeaderHeading>
        <PageHeaderDescription>
            Powerful tools that help you optimize workforce efficiency, reduce administrative overhead, and foster a productive workplace.
        </PageHeaderDescription>
        <PageActions>
          <Button asChild size="sm">
            <Link href="/signup">Get Started</Link>
          </Button>
          <Button asChild size="sm" variant="ghost">
            <Link href="/faq">Learn more..</Link>
          </Button>
        </PageActions>
      </PageHeader>
  );
}
