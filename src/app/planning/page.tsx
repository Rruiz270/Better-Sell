'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, ArrowLeft, MapPin, Building2, Calculator, BarChart3, TrendingUp, DollarSign, Users, Target, Check, BookOpen, Network, Lightbulb } from "lucide-react"
import Link from "next/link"

interface PlanningData {
  territory?: string
  businessMix: {
    b2b: number
    b2b2c: number
    b2s: number
    b2s2c: number
    b2c: number
  }
  capabilities?: string[]
  scenarios: {
    pessimistic: any
    realistic: any
    optimistic: any
  }
}

export default function Planning() {
  const [currentStep, setCurrentStep] = useState(1)
  const [planningData, setPlanningData] = useState<PlanningData>({
    businessMix: {
      b2b: 60,
      b2b2c: 25,
      b2s: 10,
      b2s2c: 4,
      b2c: 1
    },
    capabilities: [],
    scenarios: {
      pessimistic: {},
      realistic: {},
      optimistic: {}
    }
  })

  const territories = [
    { 
      id: 'premium',
      name: 'Metro Premium', 
      regions: 'São Paulo, Rio de Janeiro, Brasília', 
      investment: 60000, 
      marketSize: 2500000,
      marketDensity: 'Alta',
      opportunity: 'Corporações e empresas de grande porte',
      avgTicket: 28000,
      competition: 'Alta',
      conversionRate: { pessimistic: 0.08, realistic: 0.16, optimistic: 0.28 }
    },
    { 
      id: 'growth',
      name: 'Regional Growth', 
      regions: 'Capitais Sul/Sudeste/Nordeste', 
      investment: 50000, 
      marketSize: 1800000,
      marketDensity: 'Média',
      opportunity: 'PMEs em crescimento e filiais',
      avgTicket: 22000,
      competition: 'Média',
      conversionRate: { pessimistic: 0.10, realistic: 0.16, optimistic: 0.25 }
    },
    { 
      id: 'emerging',
      name: 'Emerging Markets', 
      regions: 'Interior e cidades médias', 
      investment: 40000, 
      marketSize: 1200000,
      marketDensity: 'Emergente',
      opportunity: 'Mercado em desenvolvimento',
      avgTicket: 18000,
      competition: 'Baixa',
      conversionRate: { pessimistic: 0.12, realistic: 0.18, optimistic: 0.28 }
    }
  ]

  const capabilities = [
    { 
      id: 'market-intelligence', 
      name: 'Market Intelligence', 
      description: 'Advanced territory analysis and competitor mapping',
      icon: Target,
      included: true,
      value: 'Análise territorial avançada e mapeamento de concorrentes'
    },
    { 
      id: 'brand-portfolio', 
      name: 'Brand Portfolio Access', 
      description: 'Access to 5 premium educational brands',
      icon: BookOpen,
      included: true,
      value: 'Acesso a 5 marcas educacionais premium'
    },
    { 
      id: 'organic-generation', 
      name: 'Organic Lead Generation', 
      description: 'Training and tools for building your own pipeline',
      icon: Network,
      included: true,
      value: 'Treinamento para geração orgânica de leads'
    },
    { 
      id: 'revenue-optimization', 
      name: 'Revenue Optimization', 
      description: 'AI-driven sales funnel and performance analytics',
      icon: TrendingUp,
      included: true,
      value: 'Funil de vendas otimizado com IA'
    },
    { 
      id: 'partnership-network', 
      name: 'Partnership Network', 
      description: 'Strategic alliances and referral systems',
      icon: Network,
      included: true,
      value: 'Rede de parcerias estratégicas e indicações'
    },
    { 
      id: 'mentorship', 
      name: 'Strategic Mentorship', 
      description: 'Weekly coaching sessions and business guidance',
      icon: Lightbulb,
      included: true,
      value: 'Mentoria estratégica semanal'
    }
  ]

  const businessModels = [
    {
      type: 'B2B',
      description: 'Vendas diretas para empresas',
      avgDeal: 25000,
      cycle: 67,
      priority: 'Alta'
    },
    {
      type: 'B2B2C',
      description: 'Parcerias com empresas',
      avgDeal: 15000,
      cycle: 45,
      priority: 'Alta'
    },
    {
      type: 'B2S',
      description: 'Vendas para escolas',
      avgDeal: 35000,
      cycle: 90,
      priority: 'Média'
    },
    {
      type: 'B2S2C',
      description: 'Parcerias com escolas',
      avgDeal: 8000,
      cycle: 37,
      priority: 'Média'
    },
    {
      type: 'B2C',
      description: 'Vendas diretas',
      avgDeal: 2500,
      cycle: 11,
      priority: 'Baixa'
    }
  ]

  const calculateProjections = () => {
    const selectedTerritory = territories.find(t => t.id === planningData.territory)
    
    if (!selectedTerritory) return null

    // Organic lead generation model - based on market potential and effort
    const marketPenetration = { pessimistic: 0.001, realistic: 0.003, optimistic: 0.008 } // % of market reached
    const scenarios = ['pessimistic', 'realistic', 'optimistic'] as const

    return scenarios.map(scenario => {
      const penetration = marketPenetration[scenario]
      const monthlyLeads = selectedTerritory.marketSize * penetration / 12
      const conversionRate = selectedTerritory.conversionRate[scenario]
      const monthlyDeals = monthlyLeads * conversionRate
      
      // Calculate weighted average deal value based on business mix and territory
      const baseTicket = selectedTerritory.avgTicket
      const avgDealValue = baseTicket * (
        (planningData.businessMix.b2b / 100) * 1.2 +
        (planningData.businessMix.b2b2c / 100) * 0.8 +
        (planningData.businessMix.b2s / 100) * 1.5 +
        (planningData.businessMix.b2s2c / 100) * 0.6 +
        (planningData.businessMix.b2c / 100) * 0.3
      )

      const monthlyRevenue = monthlyDeals * avgDealValue
      const franchiseShare = monthlyRevenue * 0.25 // 25% franchise commission
      const operationalCosts = scenario === 'pessimistic' ? 12000 : scenario === 'realistic' ? 8000 : 6000
      const netMonthlyRevenue = franchiseShare - operationalCosts
      const annualRevenue = netMonthlyRevenue * 12
      
      const totalInvestment = selectedTerritory.investment
      const roi = (annualRevenue / totalInvestment) * 100
      const paybackMonths = totalInvestment / netMonthlyRevenue

      return {
        scenario,
        monthlyLeads: Math.round(monthlyLeads),
        conversionRate: conversionRate * 100,
        monthlyDeals: Math.round(monthlyDeals),
        avgDealValue,
        monthlyRevenue,
        franchiseShare,
        netMonthlyRevenue,
        annualRevenue,
        totalInvestment,
        roi,
        paybackMonths,
        operationalCosts
      }
    })
  }

  const projections = calculateProjections()

  const steps = [
    {
      number: 1,
      title: 'Market Analysis',
      icon: MapPin,
      completed: !!planningData.territory
    },
    {
      number: 2,
      title: 'Business Strategy',
      icon: Building2,
      completed: currentStep > 2
    },
    {
      number: 3,
      title: 'Platform Capabilities',
      icon: Target,
      completed: currentStep > 3
    },
    {
      number: 4,
      title: 'Financial Modeling',
      icon: Calculator,
      completed: currentStep > 4
    }
  ]

  return (
    <>
      <style jsx global>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3B82F6 0%, #10B981 100%);
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3B82F6 0%, #10B981 100%);
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }
      `}</style>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                  Better Sell
                </h1>
                <p className="text-xs text-slate-500 -mt-1">Strategic Planning</p>
              </div>
            </Link>
            
            {/* Progress Steps */}
            <div className="hidden md:flex items-center space-x-8">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center space-x-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    step.completed || currentStep === step.number 
                      ? 'bg-gradient-to-br from-blue-600 to-emerald-600' 
                      : 'bg-slate-200'
                  }`}>
                    {step.completed ? (
                      <Check className="w-4 h-4 text-white" />
                    ) : (
                      <step.icon className={`w-4 h-4 ${
                        currentStep === step.number ? 'text-white' : 'text-slate-500'
                      }`} />
                    )}
                  </div>
                  <span className={`text-sm font-medium ${
                    step.completed || currentStep === step.number ? 'text-blue-600' : 'text-slate-500'
                  }`}>
                    {step.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        
        {/* Step 1: Territory Selection */}
        {currentStep === 1 && (
          <div>
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-medium mb-8">
                <MapPin className="w-4 h-4 mr-2" />
                Step 1: Market Analysis
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Choose Your Territory
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Select your target market based on investment capacity and growth objectives. 
                Each territory offers unique opportunities and market characteristics.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {territories.map((territory, index) => {
                const gradients = ['from-blue-500 to-blue-600', 'from-emerald-500 to-emerald-600', 'from-purple-500 to-purple-600']
                const isSelected = planningData.territory === territory.id
                return (
                  <Card 
                    key={territory.id}
                    className={`cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                      isSelected ? 'ring-2 ring-blue-500 bg-blue-50' : 'hover:shadow-lg'
                    }`}
                    onClick={() => setPlanningData({ ...planningData, territory: territory.id })}
                  >
                    <div className={`h-2 bg-gradient-to-r ${gradients[index]}`}></div>
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-2xl font-bold text-slate-900">{territory.name}</h3>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-emerald-600">R$ {territory.investment.toLocaleString()}</div>
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
                        <div>
                          <span className="text-sm text-slate-500">Average Deal Value:</span>
                          <div className="font-medium text-slate-900">R$ {territory.avgTicket.toLocaleString()}</div>
                        </div>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>

            <div className="flex justify-center">
              <Button 
                size="lg"
                onClick={() => setCurrentStep(2)}
                disabled={!planningData.territory}
                className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-8 py-3 text-lg disabled:opacity-50"
              >
                Next: Business Strategy
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        )}

        {/* Step 2: Business Model Mix */}
        {currentStep === 2 && (
          <div>
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full text-emerald-700 text-sm font-medium mb-8">
                <Building2 className="w-4 h-4 mr-2" />
                Step 2: Business Strategy
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Configure Your Revenue Mix
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Define how you'll distribute your efforts across different business models. 
                Focus on B2B and corporate partnerships generates higher-value contracts.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* Business Mix Controls */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-8">Revenue Distribution (%)</h3>
                {businessModels.map((model) => {
                  const key = model.type.toLowerCase().replace('2', '2') as keyof typeof planningData.businessMix
                  const priorityColors: { [key: string]: string } = {
                    'Alta': 'text-emerald-600 bg-emerald-50',
                    'Média': 'text-blue-600 bg-blue-50', 
                    'Baixa': 'text-slate-600 bg-slate-50'
                  }
                  return (
                    <div key={model.type} className="bg-white border border-slate-200 rounded-xl p-6">
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center space-x-3">
                          <span className="text-lg font-bold text-slate-900">{model.type}</span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${priorityColors[model.priority]}`}>
                            {model.priority} Priority
                          </span>
                        </div>
                        <span className="text-2xl font-bold text-blue-600">{planningData.businessMix[key]}%</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={planningData.businessMix[key]}
                        onChange={(e) => {
                          const newValue = parseInt(e.target.value)
                          setPlanningData({
                            ...planningData,
                            businessMix: {
                              ...planningData.businessMix,
                              [key]: newValue
                            }
                          })
                        }}
                        className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer slider"
                      />
                      <div className="text-sm text-slate-600 mt-3">
                        <div className="mb-1">{model.description}</div>
                        <div className="flex space-x-4 text-xs text-slate-500">
                          <span>Avg Deal: R$ {model.avgDeal.toLocaleString()}</span>
                          <span>Sales Cycle: {model.cycle} days</span>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Strategic Preview */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-8">Strategic Overview</h3>
                <div className="space-y-6">
                  <Card className="p-8 bg-gradient-to-br from-blue-50 to-emerald-50 border-blue-200">
                    <h4 className="text-lg font-bold text-slate-900 mb-4">Revenue Mix Analysis</h4>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center p-4 bg-white rounded-lg">
                        <div className="text-3xl font-bold text-blue-600 mb-2">
                          {planningData.businessMix.b2b + planningData.businessMix.b2b2c}%
                        </div>
                        <div className="text-sm text-slate-600">B2B Focus</div>
                        <div className="text-xs text-slate-500 mt-1">High-value corporate clients</div>
                      </div>
                      <div className="text-center p-4 bg-white rounded-lg">
                        <div className="text-3xl font-bold text-emerald-600 mb-2">
                          {planningData.businessMix.b2s + planningData.businessMix.b2s2c}%
                        </div>
                        <div className="text-sm text-slate-600">B2S Focus</div>
                        <div className="text-xs text-slate-500 mt-1">Educational institutions</div>
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="p-6">
                    <h4 className="font-bold text-slate-900 mb-4">Strategic Recommendations</h4>
                    <div className="space-y-3 text-sm">
                      {planningData.businessMix.b2b + planningData.businessMix.b2b2c >= 70 && (
                        <div className="flex items-center space-x-2 text-emerald-700">
                          <Check className="w-4 h-4" />
                          <span>Excellent B2B focus - high revenue potential</span>
                        </div>
                      )}
                      {planningData.businessMix.b2c > 10 && (
                        <div className="flex items-center space-x-2 text-amber-600">
                          <Target className="w-4 h-4" />
                          <span>Consider reducing B2C focus for higher margins</span>
                        </div>
                      )}
                      <div className="flex items-center space-x-2 text-slate-600">
                        <TrendingUp className="w-4 h-4" />
                        <span>Balanced approach enables scalable growth</span>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <Button 
                variant="outline"
                size="lg"
                onClick={() => setCurrentStep(1)}
                className="px-8 py-3 text-lg"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back: Territory
              </Button>
              <Button 
                size="lg"
                onClick={() => setCurrentStep(3)}
                className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-8 py-3 text-lg"
              >
                Next: Platform Capabilities
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Platform Capabilities */}
        {currentStep === 3 && (
          <div>
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-purple-50 border border-purple-200 rounded-full text-purple-700 text-sm font-medium mb-8">
                <Target className="w-4 h-4 mr-2" />
                Step 3: Platform Capabilities
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Your Success Framework
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Our platform provides advanced tools and training to help you build and scale your franchise 
                through organic lead generation and strategic partnerships.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {capabilities.map((capability) => (
                <Card 
                  key={capability.id}
                  className="p-6 h-full bg-gradient-to-br from-white to-slate-50 border-slate-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-xl flex items-center justify-center">
                      <capability.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="w-5 h-5 text-emerald-600" />
                      <span className="text-sm font-medium text-emerald-600">Included</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{capability.name}</h3>
                  <p className="text-sm text-slate-600 mb-4">{capability.description}</p>
                  <div className="border-t border-slate-200 pt-4">
                    <p className="text-xs text-slate-500">Value Delivered:</p>
                    <p className="text-sm font-medium text-slate-900">{capability.value}</p>
                  </div>
                </Card>
              ))}
            </div>

            {/* Organic Lead Generation Focus */}
            <Card className="p-8 bg-gradient-to-br from-emerald-50 to-blue-50 border-emerald-200 mb-16">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Organic Lead Generation Approach</h3>
                <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                  Instead of promising specific lead numbers, we focus on building your capability to 
                  generate sustainable, high-quality leads through proven strategies and partnerships.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Network className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-slate-900 mb-2">Network Building</h4>
                    <p className="text-sm text-slate-600">Strategic partnerships and referral systems</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <BookOpen className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-slate-900 mb-2">Expert Training</h4>
                    <p className="text-sm text-slate-600">Comprehensive sales and marketing education</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-slate-900 mb-2">Performance Analytics</h4>
                    <p className="text-sm text-slate-600">Data-driven optimization and growth tracking</p>
                  </div>
                </div>
              </div>
            </Card>

            <div className="flex justify-between">
              <Button 
                variant="outline"
                size="lg"
                onClick={() => setCurrentStep(2)}
                className="px-8 py-3 text-lg"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back: Business Strategy
              </Button>
              <Button 
                size="lg"
                onClick={() => setCurrentStep(4)}
                className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-8 py-3 text-lg"
              >
                View Financial Projections
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        )}

        {/* Step 4: Financial Projections */}
        {currentStep === 4 && projections && (
          <div>
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-amber-50 border border-amber-200 rounded-full text-amber-700 text-sm font-medium mb-8">
                <Calculator className="w-4 h-4 mr-2" />
                Step 4: Financial Modeling
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Financial Projections
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Based on your territory and business mix, here are financial projections for three different 
                performance scenarios using organic lead generation strategies.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {projections.map((projection, index) => {
                const colors = ['border-red-200 bg-red-50 text-red-800', 'border-amber-200 bg-amber-50 text-amber-800', 'border-emerald-200 bg-emerald-50 text-emerald-800']
                const scenarios = ['Conservative', 'Realistic', 'Optimistic']
                const bgColors = ['#EF4444', '#F59E0B', '#10B981']
                return (
                  <Card 
                    key={projection.scenario}
                    className={`p-6 ${colors[index]} border-2`}
                  >
                    <div className="flex items-center space-x-3 mb-6">
                      <div 
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: bgColors[index] }}
                      ></div>
                      <h3 className="text-xl font-bold">{scenarios[index]}</h3>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-slate-600">Market Reach:</span>
                          <p className="font-semibold">{projection.monthlyLeads} leads/month</p>
                        </div>
                        <div>
                          <span className="text-slate-600">Conversion:</span>
                          <p className="font-semibold">{projection.conversionRate.toFixed(1)}%</p>
                        </div>
                        <div>
                          <span className="text-slate-600">Monthly Deals:</span>
                          <p className="font-semibold">{projection.monthlyDeals}</p>
                        </div>
                        <div>
                          <span className="text-slate-600">Avg Deal Size:</span>
                          <p className="font-semibold">R$ {Math.round(projection.avgDealValue).toLocaleString()}</p>
                        </div>
                      </div>
                      
                      <div className="border-t pt-4">
                        <div className="mb-3">
                          <span className="text-slate-600 text-sm">Net Monthly Revenue:</span>
                          <p className="text-2xl font-bold" style={{ color: bgColors[index] }}>
                            R$ {Math.round(projection.netMonthlyRevenue).toLocaleString()}
                          </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-slate-600">Annual Revenue:</span>
                            <p className="font-bold">R$ {Math.round(projection.annualRevenue).toLocaleString()}</p>
                          </div>
                          <div>
                            <span className="text-slate-600">ROI:</span>
                            <p className="font-bold" style={{ color: bgColors[index] }}>
                              {projection.roi.toFixed(1)}%
                            </p>
                          </div>
                        </div>
                        <div className="mt-2">
                          <span className="text-slate-600 text-sm">Payback Period:</span>
                          <p className="font-semibold">{projection.paybackMonths.toFixed(1)} months</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>

            <div className="flex justify-between">
              <Button 
                variant="outline"
                size="lg"
                onClick={() => setCurrentStep(3)}
                className="px-8 py-3 text-lg"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back: Capabilities
              </Button>
              <Link href="/scenarios">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-8 py-3 text-lg"
                >
                  Explore Scenarios
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        )}
        </div>
      </div>
    </>
  )
}