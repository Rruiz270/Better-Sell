'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Calculator, TrendingUp, MapPin, Building2, Users, Target, BarChart3, DollarSign, Lightbulb, Shield, Briefcase, Network, Award, ChevronRight, Star } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const [activeFeature, setActiveFeature] = useState(0)

  const territories = [
    { 
      name: 'Metro Premium', 
      regions: 'São Paulo, Rio de Janeiro, Brasília', 
      investment: 'R$ 60.000', 
      marketDensity: 'Alta',
      opportunity: 'Corporações e empresas de grande porte',
      id: 'premium'
    },
    { 
      name: 'Regional Growth', 
      regions: 'Capitais Sul/Sudeste/Nordeste', 
      investment: 'R$ 50.000', 
      marketDensity: 'Média',
      opportunity: 'PMEs em crescimento e filiais',
      id: 'growth'
    },
    { 
      name: 'Emerging Markets', 
      regions: 'Interior e cidades médias', 
      investment: 'R$ 40.000', 
      marketDensity: 'Emergente',
      opportunity: 'Mercado em desenvolvimento',
      id: 'emerging'
    }
  ]

  const businessModels = [
    {
      type: 'B2B Corporate',
      priority: 'Primária',
      description: 'Vendas diretas para empresas',
      focus: 'Corporações e médias empresas',
      potential: '60% do pipeline',
      cycle: '60-120 dias'
    },
    {
      type: 'B2B2C Partnership',
      priority: 'Primária', 
      description: 'Parcerias estratégicas',
      focus: 'RH e desenvolvimento corporativo',
      potential: '25% do pipeline',
      cycle: '45-90 dias'
    },
    {
      type: 'B2S Education',
      priority: 'Secundária',
      description: 'Instituições educacionais',
      focus: 'Escolas e universidades',
      potential: '10% do pipeline',
      cycle: '90-180 dias'
    },
    {
      type: 'B2S2C Integration',
      priority: 'Secundária',
      description: 'Programas educacionais',
      focus: 'Parcerias com instituições',
      potential: '4% do pipeline',
      cycle: '60-120 dias'
    },
    {
      type: 'B2C Individual',
      priority: 'Tertiary',
      description: 'Clientes individuais',
      focus: 'Profissionais executivos',
      potential: '1% do pipeline',
      cycle: '15-30 dias'
    }
  ]

  const planningSteps = [
    { 
      step: '01',
      title: 'Market Analysis', 
      description: 'Analyze your target territory and market opportunities',
      icon: MapPin,
      color: 'from-blue-600 to-blue-700'
    },
    { 
      step: '02', 
      title: 'Business Strategy',
      description: 'Configure your revenue mix and business approach',
      icon: Building2,
      color: 'from-emerald-600 to-emerald-700'
    },
    { 
      step: '03',
      title: 'Financial Modeling',
      description: 'Model scenarios and project your investment returns',
      icon: Calculator,
      color: 'from-purple-600 to-purple-700'
    },
    { 
      step: '04',
      title: 'Investment Proposal',
      description: 'Generate your personalized franchise proposal', 
      icon: BarChart3,
      color: 'from-amber-600 to-amber-700'
    }
  ]

  const capabilities = [
    { 
      title: 'Market Intelligence', 
      description: 'Advanced territory analysis and competitor mapping', 
      icon: Target,
      color: 'bg-blue-50 border-blue-200 text-blue-800'
    },
    { 
      title: 'Brand Portfolio', 
      description: 'Access to 5 premium educational brands', 
      icon: Award,
      color: 'bg-emerald-50 border-emerald-200 text-emerald-800'
    },
    { 
      title: 'Revenue Optimization', 
      description: 'AI-driven sales funnel and performance analytics', 
      icon: TrendingUp,
      color: 'bg-purple-50 border-purple-200 text-purple-800'
    },
    { 
      title: 'Partnership Network', 
      description: 'Strategic alliances and referral systems', 
      icon: Network,
      color: 'bg-amber-50 border-amber-200 text-amber-800'
    }
  ]

  const keyMetrics = [
    { 
      title: 'Investment Range', 
      value: 'R$ 40k - 60k', 
      description: 'Territory-based investment levels', 
      icon: DollarSign,
      gradient: 'from-blue-500 to-blue-600'
    },
    { 
      title: 'Revenue Share', 
      value: '25% Franchise', 
      description: 'Performance-based commission structure', 
      icon: TrendingUp,
      gradient: 'from-emerald-500 to-emerald-600'
    },
    { 
      title: 'Business Focus', 
      value: '85% B2B/B2B2C', 
      description: 'High-value corporate clients', 
      icon: Briefcase,
      gradient: 'from-purple-500 to-purple-600'
    },
    { 
      title: 'Launch Target', 
      value: '5 Franchisees', 
      description: 'Q1 2026 strategic expansion', 
      icon: Users,
      gradient: 'from-amber-500 to-amber-600'
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                  Better Sell
                </h1>
                <p className="text-xs text-slate-500 -mt-1">Franchise Intelligence</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/planning" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">
                Planning
              </Link>
              <Link href="/scenarios" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">
                Scenarios
              </Link>
              <Link href="/presentation" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">
                Presentation
              </Link>
              <Button size="sm" className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700">
                Start Planning
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-24">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-medium mb-8">
              <Lightbulb className="w-4 h-4 mr-2" />
              Franchise Investment Intelligence Platform
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
                Strategic Franchise
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                Planning Platform
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              Model your <strong className="text-slate-800">Better Tech franchise investment</strong> with advanced 
              territorial analysis, business strategy optimization, and scenario-based financial projections.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link href="/planning">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-8 py-3 text-lg">
                  Start Strategic Planning
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="px-8 py-3 text-lg border-slate-300 hover:bg-slate-50">
                View Demo Results
                <BarChart3 className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Key Metrics Preview */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {keyMetrics.map((metric, index) => (
                <div key={metric.title} className="bg-white/60 backdrop-blur border border-slate-200 rounded-2xl p-6 hover:bg-white/80 transition-all duration-300">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${metric.gradient} flex items-center justify-center mb-4`}>
                    <metric.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900 mb-1">{metric.value}</div>
                  <div className="text-sm font-medium text-slate-600 mb-1">{metric.title}</div>
                  <div className="text-xs text-slate-500">{metric.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Planning Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Intelligent Planning Process
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our data-driven approach combines market intelligence, financial modeling, 
              and strategic planning to optimize your franchise investment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {planningSteps.map((step, index) => (
              <div key={step.step} className="group relative">
                <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-slate-400 mb-4">{step.step}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.description}</p>
                </div>
                
                {/* Connector line */}
                {index < planningSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-slate-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Model Strategy */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Strategic Revenue Model
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Focus on high-value B2B and corporate partnerships with minimal consumer dependency. 
              Our model prioritizes sustainable, scalable business relationships.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {businessModels.slice(0, 2).map((model, index) => (
              <div key={model.type} className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{model.type}</h3>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-100 text-emerald-700">
                      {model.priority} Focus
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-emerald-600">{model.potential}</div>
                    <div className="text-sm text-slate-500">Pipeline Target</div>
                  </div>
                </div>
                <p className="text-slate-600 mb-4">{model.description}</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-slate-500">Focus Area:</span>
                    <div className="font-medium text-slate-900">{model.focus}</div>
                  </div>
                  <div>
                    <span className="text-slate-500">Sales Cycle:</span>
                    <div className="font-medium text-slate-900">{model.cycle}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Secondary Models */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {businessModels.slice(2).map((model, index) => (
              <div key={model.type} className="bg-white border border-slate-200 rounded-xl p-6">
                <h4 className="font-bold text-slate-900 mb-2">{model.type}</h4>
                <div className="text-2xl font-bold text-slate-600 mb-2">{model.potential}</div>
                <p className="text-sm text-slate-600 mb-3">{model.description}</p>
                <div className="text-xs text-slate-500">{model.cycle} • {model.focus}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Capabilities */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Platform Capabilities
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Advanced tools and systems to support your franchise growth and operational excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <div key={capability.title} className="group">
                <div className={`border-2 rounded-2xl p-6 h-full transition-all duration-300 group-hover:shadow-lg ${capability.color}`}>
                  <capability.icon className="w-8 h-8 mb-4" />
                  <h3 className="font-bold text-lg mb-3">{capability.title}</h3>
                  <p className="text-sm leading-relaxed">{capability.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Territory Analysis */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Territory Investment Levels
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose your market based on investment capacity and growth objectives. 
              Each territory offers unique opportunities and market characteristics.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {territories.map((territory, index) => {
              const gradients = ['from-blue-500 to-blue-600', 'from-emerald-500 to-emerald-600', 'from-purple-500 to-purple-600']
              return (
                <div key={territory.id} className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className={`h-2 bg-gradient-to-r ${gradients[index]}`}></div>
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold text-slate-900">{territory.name}</h3>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-emerald-600">{territory.investment}</div>
                        <div className="text-sm text-slate-500">Investment</div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <span className="text-sm text-slate-500">Coverage Area:</span>
                        <div className="font-medium text-slate-900">{territory.regions}</div>
                      </div>
                      <div>
                        <span className="text-sm text-slate-500">Market Density:</span>
                        <div className="font-medium text-slate-900">{territory.marketDensity}</div>
                      </div>
                      <div>
                        <span className="text-sm text-slate-500">Key Opportunity:</span>
                        <div className="font-medium text-slate-900">{territory.opportunity}</div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Model Your Investment?
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Use our intelligent planning platform to create detailed financial projections 
            and develop your franchise strategy for Q1 2026 launch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/planning">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 px-8 py-3 text-lg">
                Start Strategic Planning
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="border-slate-400 text-white hover:bg-slate-800 px-8 py-3 text-lg">
              Download Framework
            </Button>
          </div>
          
          <div className="mt-16 flex items-center justify-center space-x-8 text-slate-400">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5" />
              <span>Secure Planning</span>
            </div>
            <div className="flex items-center space-x-2">
              <BarChart3 className="w-5 h-5" />
              <span>Real-time Modeling</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5" />
              <span>Professional Results</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">B</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                    Better Sell
                  </h1>
                  <p className="text-xs text-slate-500">Franchise Intelligence Platform</p>
                </div>
              </div>
              <p className="text-slate-600 max-w-md">
                Advanced franchise investment planning for the Better Tech ecosystem. 
                Strategic modeling for Q1 2026 expansion.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-slate-900 mb-4">Platform</h3>
              <div className="space-y-3 text-sm">
                <Link href="/planning" className="block text-slate-600 hover:text-slate-900 transition-colors">Territory Analysis</Link>
                <Link href="/scenarios" className="block text-slate-600 hover:text-slate-900 transition-colors">Financial Scenarios</Link>
                <Link href="/presentation" className="block text-slate-600 hover:text-slate-900 transition-colors">Investment Proposals</Link>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-slate-900 mb-4">Better Tech</h3>
              <div className="space-y-3 text-sm">
                <a href="#" className="block text-slate-600 hover:text-slate-900 transition-colors">About Us</a>
                <a href="#" className="block text-slate-600 hover:text-slate-900 transition-colors">Privacy Policy</a>
                <a href="#" className="block text-slate-600 hover:text-slate-900 transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-500 text-sm">
              © 2024 Better Tech. All rights reserved. Strategic franchise planning for Q1 2026.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <div className="flex items-center space-x-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-sm text-slate-600">Professional Planning Platform</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}