import { siteConfig } from "@/config/site"

export function SiteFooter() {
    return (
        <footer className="border-grid border-t py-6 md:px-8 md:py-0">
            <div className="container-wrapper">
                <div className="container py-4">
                    <div className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
                        Built by{" "}
                        <a
                            href={siteConfig.links.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium underline underline-offset-4"
                        >
                            Rey Wijaya
                        </a>
                        , for demonstration only. Check out my{" "}
                        <a
                            href={siteConfig.links.github}
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium underline underline-offset-4"
                        >
                            GitHub
                        </a>
                        . UI Powered by{" "}
                        <a
                            href={siteConfig.links.shadcn}
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium underline underline-offset-4"
                        >
                            shadcn
                        </a>
                        .
                    </div>
                </div>
            </div>
        </footer>
    )
}