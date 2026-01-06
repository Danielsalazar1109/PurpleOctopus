'use client'

import { Facebook, Instagram, Mail, Phone } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  const year = new Date().getFullYear()

  const gmail = "purpleoctopusservices@gmail.com"
  const phoneDisplay = "250-884-1073"
  const phoneHref = "tel:+12508841073"
  const gmailHref = "mailto:" + gmail

  const instagramHref = "https://www.instagram.com/"
  const facebookHref = "https://www.facebook.com/"

  return (
    <footer className="mt-16 bg-gradient-to-b from-purple-700 to-purple-900 text-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 py-12">
        <div className="grid gap-10 md:grid-cols-3">

          {/* Columna 1 - Brand */}
          <div className="flex flex-row items-center md:items-start text-center md:text-left">
            <Image
              src="/images/logas.png"
              alt="Purple Octopus Service"
              width={120}
              height={120}
              className="h-24 w-24"
            />
            <div className="flex flex-col space-y-2 mx-auto">
            <p className="mt-4 text-2xl font-semibold">Purple Octopus Service</p>
            <p className="text-white/80">Interior & Exterior Cleaning</p>
            </div>
          </div>

          {/* Columna 2 - Info */}
          <div className="space-y-6 text-center md:text-left mx-auto">
            <a
              href={gmailHref}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center md:justify-start gap-3 hover:text-white transition"
            >
              <Mail className="h-6 w-6" />
              <span className="text-lg">{gmail}</span>
            </a>

            <a
              href={phoneHref}
              className="flex items-center justify-center md:justify-start gap-3 hover:text-white transition"
            >
              <Phone className="h-6 w-6" />
              <span className="text-lg">{phoneDisplay}</span>
            </a>
          </div>

          {/* Columna 3 - Social */}
          <div className="text-center md:text-left">
            <h3 className="text-lg text-center font-semibold tracking-wider text-white/90">
              FIND US
            </h3>
            <div className="mt-5 flex justify-center md:justify-start gap-4 mx-43">
              <a
                href={instagramHref}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="rounded-full bg-white/10 p-3 hover:bg-white/20 transition"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={facebookHref}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="rounded-full bg-white/10 p-3 hover:bg-white/20 transition"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 py-4">
            <p className="text-center">© {year} Purple Octopus Service. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
