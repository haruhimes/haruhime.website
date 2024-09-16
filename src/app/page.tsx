import {
    SiDiscord,
    SiGithub,
    SiOsu,
    SiNamemc,
    SiTesla,
}                                               from "react-icons/si";

import { Card, CardBody }                       from "@nextui-org/card";
import { Divider }                              from "@nextui-org/divider";
import { Image }                                from "@nextui-org/image";
import { Link }                                 from "@nextui-org/link";

import SocialSection                            from "@container/SocialSection";

export default function Page() {

    const socials = [
        { Icon: SiOsu,     label: "osu!",    link: "https://osu.ppy.sh/users/12231334/",             color: "text-pink"     },
        { Icon: SiDiscord, label: "Discord", link: "https://discord.com/users/1134618459926433812/", color: "text-blue"     },
        { Icon: SiGithub,  label: "GitHub" , link: "https://GitHub.com/haruhimes/",                  color: "text-surface1" },
        { Icon: SiNamemc,  label: "NameMC" , link: "https://namemc.com/profile/Haruhime./",          color: "text-surface0" },
        { Icon: SiTesla,   label: "Tetr.io", link: "https://ch.tetr.io/u/haruhime/",                 color: "text-green"    },
    ];

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-base to-mantle p-4 sm:p-6">
            <Card className="bg-crust rounded-3xl shadow-2xl max-w-lg sm:max-w-xl p-4 sm:p-6">
                <CardBody className="flex flex-col items-center">
                    <Image
                        src="https://avatars.githubusercontent.com/u/140860369?v=4"
                        alt="avatar"
                        width={90}
                        height={90}
                        className="rounded-full border-4 border-surface0 shadow-lg mb-4 sm:mb-5"
                    />

                    <h1 className="text-subtext0 text-center text-lg mb-1 sm:mb-2">
                        Haruhime
                    </h1>

                    <SocialSection title="" skills={socials} iconSize="w-8 sm:w-9 h-8 sm:h-9" />
                </CardBody>
            </Card>

            <footer className="flex justify-center items-center py-3 mt-4 hover:text-text transition-colors duration-300">
                <Link
                    isExternal
                    href="https://github.com/haruhimes/haruhime.website"
                    target="_blank"
                    aria-label="Source Redirect"
                    className="transition-colors duration-300"
                >
                    <p className="ml-2 text-xs sm:text-sm text-subtext1 hover:underline">&copy; haruhime.website {new Date().getFullYear()}</p>
                </Link>
            </footer>
        </div>
    );
}

// path: src/app/page.tsx
