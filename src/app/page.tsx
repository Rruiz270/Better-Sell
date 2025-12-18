'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, BarChart3, Users, Globe, TrendingUp, Zap, Shield, Star } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const [isLoading, setIsLoading] = useState(false)

  const brands = [
    { name: 'Alumni', description: 'English & Spanish Learning', color: 'from-blue-600 to-blue-700', icon: '🎓' },
    { name: 'TEACH', description: 'AI Education Platform', color: 'from-purple-600 to-purple-700', icon: '🤖' },
    { name: 'Sprix', description: 'Coding & Mathematics', color: 'from-green-600 to-green-700', icon: '💻' },
    { name: 'JINSO', description: 'Testing & WhatsApp Solutions', color: 'from-orange-600 to-orange-700', icon: '📱' },
    { name: 'Kidpreneurs', description: 'Entrepreneurship for Kids', color: 'from-pink-600 to-pink-700', icon: '👶' },
  ]

  const stats = [
    { label: 'Active Franchisees', value: '250+', icon: Users },
    { label: 'Average Commission', value: '20%', icon: TrendingUp },
    { label: 'Territories Covered', value: '15 States', icon: Globe },
    { label: 'Revenue Growth', value: '+45%', icon: BarChart3 },
  ]

  const features = [
    {
      icon: Zap,
      title: 'Intelligent Lead Distribution',
      description: 'Territory-based allocation with smart overflow to maximize conversions'
    },
    {
      icon: Shield,
      title: 'Secure Platform',
      description: 'LGPD compliant with enterprise-grade security and data protection'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Real-time dashboards with performance insights and growth predictions'
    },
    {
      icon: Star,
      title: 'Better Tech Integration',
      description: 'Seamlessly integrates with existing Alumni and TEACH platforms'
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-green-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <span className="text-2xl font-bold text-gradient">Better Sell</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">
                Features
              </Link>
              <Link href="#brands" className="text-gray-600 hover:text-blue-600 transition-colors">
                Brands
              </Link>
              <Link href="#stats" className="text-gray-600 hover:text-blue-600 transition-colors">
                Stats
              </Link>
              <Button variant="outline" size="sm">
                Login
              </Button>
              <Button size="sm">
                Join Platform
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-16 pb-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Multi-Brand</span> Franchising
              <br />
              <span className="text-gray-800">Made Simple</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Sell Alumni, TEACH, Sprix, JINSO, and Kidpreneurs with one unified platform. 
              20% commission across all brands with intelligent territory management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="xl" 
                className="group"
                onClick={() => setIsLoading(true)}
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-16 px-4 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={stat.label} className={`text-center card-hover animation-delay-${index * 200}`}>
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section id="brands" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gradient">Our Brand Portfolio</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Access multiple premium educational brands through one unified platform
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brands.map((brand, index) => (
              <Card 
                key={brand.name} 
                className={`interactive-card animation-delay-${index * 100} overflow-hidden`}
              >
                <div className={`h-2 bg-gradient-to-r ${brand.color}`} />
                <CardHeader className="pb-2">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">{brand.icon}</span>
                    <div>
                      <CardTitle className="text-xl">{brand.name}</CardTitle>
                      <CardDescription className="text-sm">{brand.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">Commission Rate</div>
                    <div className="text-lg font-semibold text-green-600">20%</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gradient">Platform Features</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to succeed as a Better Tech franchisee
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={feature.title} className={`card-hover animation-delay-${index * 200}`}>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Join the Better Sell Network?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Start selling multiple premium educational brands with our proven franchising system.
            Fixed R$50k investment, 20% commission, and comprehensive support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" variant="secondary">
              Apply Now
            </Button>
            <Button size="xl" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Download Prospectus
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">B</span>
                </div>
                <span className="text-xl font-bold">Better Sell</span>
              </div>
              <p className="text-gray-400 text-sm">
                Multi-brand franchising platform for the Better Tech ecosystem.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">Dashboard</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Analytics</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Lead Management</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Commission Tracking</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Training Materials</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Community Forum</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Contact Support</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">About Better Tech</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">LGPD Compliance</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Better Tech. All rights reserved. Built with human-first AI philosophy.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}