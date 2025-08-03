import { Shield, Users, Settings, BarChart3 } from "lucide-react"

export default function AdminLoading() {
  return (
    <div className="min-h-screen bg-background text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950"></div>
        <div className="cyber-grid opacity-20"></div>
        <div className="floating-particles"></div>
      </div>

      {/* Navigation Skeleton */}
      <nav className="relative z-50 border-b border-purple-500/20 backdrop-blur-xl bg-slate-950/80">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div className="h-6 w-32 bg-slate-700/50 rounded animate-pulse"></div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="h-8 w-20 bg-slate-700/50 rounded animate-pulse"></div>
              <div className="h-8 w-20 bg-slate-700/50 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </nav>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header Skeleton */}
        <div className="mb-8">
          <div className="h-10 w-48 bg-slate-700/50 rounded animate-pulse mb-2"></div>
          <div className="h-5 w-64 bg-slate-700/50 rounded animate-pulse"></div>
        </div>

        {/* System Stats Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { icon: Users, color: "purple" },
            { icon: BarChart3, color: "blue" },
            { icon: Shield, color: "green" },
            { icon: Settings, color: "yellow" },
          ].map((stat, index) => (
            <div key={index} className="glass-card border-purple-500/20 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="h-4 w-24 bg-slate-700/50 rounded animate-pulse mb-2"></div>
                  <div className="h-8 w-16 bg-slate-700/50 rounded animate-pulse"></div>
                </div>
                <stat.icon className={`w-8 h-8 text-${stat.color}-400`} />
              </div>
              <div className="mt-4">
                <div className="h-3 w-32 bg-slate-700/50 rounded animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs Skeleton */}
        <div className="space-y-6">
          <div className="bg-slate-800/50 border border-purple-500/20 rounded-lg p-1">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-10 w-32 bg-slate-700/50 rounded animate-pulse"></div>
              ))}
            </div>
          </div>

          {/* User Management Content Skeleton */}
          <div className="glass-card border-purple-500/20 p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="flex items-center mb-2">
                  <Users className="w-6 h-6 text-purple-400 mr-2" />
                  <div className="h-6 w-32 bg-slate-700/50 rounded animate-pulse"></div>
                </div>
                <div className="h-4 w-48 bg-slate-700/50 rounded animate-pulse"></div>
              </div>
              <div className="h-10 w-28 bg-slate-700/50 rounded animate-pulse"></div>
            </div>

            {/* Search and Filter Skeleton */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex-1 h-10 bg-slate-700/50 rounded animate-pulse"></div>
              <div className="h-10 w-32 bg-slate-700/50 rounded animate-pulse"></div>
              <div className="h-10 w-10 bg-slate-700/50 rounded animate-pulse"></div>
            </div>

            {/* Users List Skeleton */}
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="p-4 rounded-lg bg-slate-800/30 border border-gray-700/50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-slate-700/50 rounded-full animate-pulse"></div>
                      <div>
                        <div className="h-5 w-32 bg-slate-700/50 rounded animate-pulse mb-1"></div>
                        <div className="h-4 w-48 bg-slate-700/50 rounded animate-pulse mb-1"></div>
                        <div className="h-3 w-24 bg-slate-700/50 rounded animate-pulse"></div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="h-5 w-16 bg-slate-700/50 rounded animate-pulse mb-1"></div>
                        <div className="h-5 w-12 bg-slate-700/50 rounded animate-pulse mb-1"></div>
                        <div className="h-3 w-20 bg-slate-700/50 rounded animate-pulse"></div>
                      </div>
                      <div className="flex space-x-2">
                        {[...Array(3)].map((_, j) => (
                          <div key={j} className="w-8 h-8 bg-slate-700/50 rounded animate-pulse"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
