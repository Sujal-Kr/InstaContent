'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sparkles, MessageSquare, Image as ImageIcon, Code, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useClerk, UserButton } from "@clerk/nextjs"

export default function Home() {
  const { user } = useClerk()
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between z-50 relative ">
        <Link className="flex items-center justify-center" href="/">
          <Sparkles className="h-6 w-6 text-blue-600" />
          <span className="ml-2 text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Insta Content
          </span>
        </Link>
        <nav>
          {
            user ? <UserButton /> :
              <Link href={'/sign-in'}>
                <Button>Sign In</Button>
              </Link>
          }
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 px-4 md:px-6 relative overflow-hidden">
          {/* <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Abstract background"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 z-0"
          /> */}
          <div className="container mx-auto relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-2xl ">Generate Amazing</h1>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Content Instantly
                </h1>
                <p className="mx-auto max-w-[700px] text-xl text-gray-500 md:text-2xl">
                  Create blog posts, Instagram captions, code snippets, and more with our advanced AI-powered platform.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="flex-1 bg-white/90 text-gray-900 placeholder-gray-500 border-gray-300 focus:border-blue-500"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button type="submit" className="">
                    Start Free
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Unleash Your Creativity
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 md:px-20">
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                  <MessageSquare className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Blog Content</h3>
                <p className="text-gray-600">Generate engaging blog posts on any topic with just a few clicks.</p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center">
                  <ImageIcon className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Instagram Posts</h3>
                <p className="text-gray-600">Create eye-catching captions and hashtags for your Instagram content.</p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center">
                  <Code className="h-8 w-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Code Generation</h3>
                <p className="text-gray-600">Generate code snippets and boilerplate for various programming languages.</p>
              </div>
            </div>
            <div className="mt-12 text-center">
              <Link href={'/dashboard'}>
                <Button className="">
                  Explore All Features <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 px-4 md:px-6 bg-gray-100">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">© 2024 Insta Content | Sujal.dev</p>
          <nav className="flex gap-4 mt-4 md:mt-0">
            <Link className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#">
              Terms of Service
            </Link>
            <Link className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#">
              Privacy Policy
            </Link>
            <Link className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="https://www.linkedin.com/in/sujal-kumar-528984227/" target="_blank">
              Contact Us
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}