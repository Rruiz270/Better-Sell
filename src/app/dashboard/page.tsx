'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Target,
  Bell,
  Search,
  Filter,
  Download,
  Calendar,
  MoreVertical,
  ArrowUpRight,
  ArrowDownRight,
  MapPin,
  Phone,
  Mail,
  Star
} from "lucide-react"

export default function Dashboard() {
  const [timeRange, setTimeRange] = useState('30d')

  const stats = [
    {
      title: "Total Revenue",
      value: "R$ 124,500",
      change: "+12.5%",
      changeType: "positive",
      icon: DollarSign,
      description: "vs last month"
    },
    {
      title: "Active Leads",
      value: "47",
      change: "+3",
      changeType: "positive", 
      icon: Target,
      description: "new this week"
    },
    {
      title: "Commission Earned",
      value: "R$ 24,900",
      change: "+8.2%",
      changeType: "positive",
      icon: TrendingUp,
      description: "vs last month"
    },
    {
      title: "Conversion Rate",
      value: "14.2%",
      change: "-2.1%",
      changeType: "negative",
      icon: Users,
      description: "vs last month"
    }
  ]

  const recentLeads = [
    {
      id: 1,
      name: "Maria Silva",
      company: "Colégio São José",
      brand: "Alumni",
      product: "English Course",
      value: "R$ 4,500",
      status: "hot",
      location: "São Paulo, SP",
      contact: "+55 11 99999-9999",
      email: "maria@colegio.com",
      lastContact: "2 hours ago"
    },
    {
      id: 2,
      name: "João Santos",
      company: "Tech Academy",
      brand: "TEACH",
      product: "AI Education Platform",
      value: "R$ 12,000",
      status: "warm",
      location: "Rio de Janeiro, RJ",
      contact: "+55 21 88888-8888", 
      email: "joao@techacademy.com",
      lastContact: "1 day ago"
    },
    {
      id: 3,
      name: "Ana Costa",
      company: "Individual",
      brand: "Kidpreneurs",
      product: "Entrepreneurship Course",
      value: "R$ 2,800",
      status: "cold",
      location: "Belo Horizonte, MG",
      contact: "+55 31 77777-7777",
      email: "ana@email.com", 
      lastContact: "3 days ago"
    }
  ]

  const brands = [
    { name: 'Alumni', sales: 'R$ 45,200', leads: 18, color: 'bg-blue-500' },
    { name: 'TEACH', sales: 'R$ 38,100', leads: 12, color: 'bg-purple-500' },
    { name: 'Sprix', sales: 'R$ 25,400', leads: 8, color: 'bg-green-500' },
    { name: 'JINSO', sales: 'R$ 15,800', leads: 6, color: 'bg-orange-500' },
    { name: 'Kidpreneurs', sales: 'R$ 8,900', leads: 3, color: 'bg-pink-500' },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'hot': return 'bg-red-100 text-red-800'
      case 'warm': return 'bg-yellow-100 text-yellow-800'
      case 'cold': return 'bg-blue-100 text-blue-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'hot': return '🔥'
      case 'warm': return '⚡'
      case 'cold': return '❄️'
      default: return '📋'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600">Welcome back, João Silva</p>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
            <Button variant="outline" size="sm">
              <Calendar className="h-4 w-4 mr-2" />
              {timeRange}
            </Button>
            <Button size="sm">
              <Bell className="h-4 w-4 mr-2" />
              Notifications
            </Button>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={stat.title} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <div className="flex items-center mt-2">
                      {stat.changeType === 'positive' ? (
                        <ArrowUpRight className="h-4 w-4 text-green-500" />
                      ) : (
                        <ArrowDownRight className="h-4 w-4 text-red-500" />
                      )}
                      <span className={`text-sm font-medium ml-1 ${
                        stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {stat.change}
                      </span>
                      <span className="text-sm text-gray-600 ml-2">{stat.description}</span>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Recent Leads */}
          <div className="lg:col-span-2">
            <Card className="h-full">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">Recent Leads</CardTitle>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      <Search className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Filter className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardDescription>
                  Manage your active sales opportunities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentLeads.map((lead) => (
                    <div key={lead.id} className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-semibold">
                              {lead.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900">{lead.name}</h3>
                              <p className="text-sm text-gray-600">{lead.company}</p>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                            <div>
                              <span className="text-gray-500">Brand:</span>
                              <p className="font-medium">{lead.brand}</p>
                            </div>
                            <div>
                              <span className="text-gray-500">Product:</span>
                              <p className="font-medium">{lead.product}</p>
                            </div>
                            <div>
                              <span className="text-gray-500">Value:</span>
                              <p className="font-medium text-green-600">{lead.value}</p>
                            </div>
                            <div>
                              <span className="text-gray-500">Location:</span>
                              <p className="font-medium flex items-center">
                                <MapPin className="h-3 w-3 mr-1" />
                                {lead.location}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center justify-between mt-3">
                            <div className="flex items-center space-x-4 text-sm text-gray-600">
                              <span className="flex items-center">
                                <Phone className="h-3 w-3 mr-1" />
                                {lead.contact}
                              </span>
                              <span className="flex items-center">
                                <Mail className="h-3 w-3 mr-1" />
                                {lead.email}
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(lead.status)}`}>
                                {getStatusIcon(lead.status)} {lead.status.toUpperCase()}
                              </span>
                              <span className="text-xs text-gray-500">{lead.lastContact}</span>
                            </div>
                          </div>
                        </div>
                        
                        <Button variant="outline" size="sm">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <Button variant="outline">
                    View All Leads
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Brand Performance */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Brand Performance</CardTitle>
                <CardDescription>Sales by brand this month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {brands.map((brand) => (
                    <div key={brand.name} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 ${brand.color} rounded-full`} />
                        <div>
                          <p className="font-medium text-gray-900">{brand.name}</p>
                          <p className="text-sm text-gray-600">{brand.leads} leads</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">{brand.sales}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
                <CardDescription>Frequently used tools</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <Target className="h-4 w-4 mr-2" />
                  Add New Lead
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <DollarSign className="h-4 w-4 mr-2" />
                  Record Sale
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Users className="h-4 w-4 mr-2" />
                  Contact Support
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Star className="h-4 w-4 mr-2" />
                  Rate Experience
                </Button>
              </CardContent>
            </Card>

            {/* Goals */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Monthly Goals</CardTitle>
                <CardDescription>Track your progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Sales Target</span>
                      <span>R$ 124k / R$ 150k</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-600 to-green-600 h-2 rounded-full" style={{width: '82%'}} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Leads Converted</span>
                      <span>18 / 25</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-600 to-green-700 h-2 rounded-full" style={{width: '72%'}} />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}