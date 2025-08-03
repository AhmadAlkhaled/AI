import { Shield, Bell, AlertTriangle, CheckCircle, Info } from "lucide-react"

export default function NotificationsLoading() {
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
              <div className="w-5 h-5 bg-slate-700/50 rounded animate-pulse"></div>
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div className="h-6 w-16 bg-slate-700/50 rounded animate-pulse"></div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="h-6 w-20 bg-slate-700/50 rounded animate-pulse"></div>
              <div className="h-8 w-24 bg-slate-700/50 rounded animate-pulse"></div>
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

        {/* Quick Stats Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { icon: Bell, color: "purple" },
            { icon: AlertTriangle, color: "red" },
            { icon: CheckCircle, color: "yellow" },
            { icon: Info, color: "green" },
          ].map((stat, index) => (
            <div key={index} className="glass-card border-purple-500/20 p-6 text-center">
              <stat.icon className={`w-8 h-8 text-${stat.color}-400 mx-auto mb-2`} />
              <div className="h-8 w-12 bg-slate-700/50 rounded animate-pulse mx-auto mb-1"></div>
              <div className="h-4 w-16 bg-slate-700/50 rounded animate-pulse mx-auto"></div>
            </div>
          ))}
        </div>

        {/* Filters and Search Skeleton */}
        <div className="glass-card border-purple-500/20 mb-8 p-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="relative flex-1 h-10 bg-slate-700/50 rounded animate-pulse"></div>
              <div className="h-10 w-32 bg-slate-700/50 rounded animate-pulse"></div>
              <div className="h-10 w-32 bg-slate-700/50 rounded animate-pulse"></div>
            </div>
            <div className="flex gap-2">
              <div className="h-10 w-28 bg-slate-700/50 rounded animate-pulse"></div>
              <div className="h-10 w-40 bg-slate-700/50 rounded animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Tabs Skeleton */}
        <div className="space-y-6">
          <div className="bg-slate-800/50 border border-purple-500/20 rounded-lg p-1">
            <div className="flex space-x-1">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-10 w-32 bg-slate-700/50 rounded animate-pulse"></div>
              ))}
            </div>
          </div>

          {/* Notifications List Skeleton */}
          <div className="space-y-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="glass-card border-purple-500/20 p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="w-5 h-5 bg-slate-700/50 rounded animate-pulse mt-1"></div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="h-5 w-48 bg-slate-700/50 rounded animate-pulse"></div>
                        <div className="w-2 h-2 bg-slate-700/50 rounded-full animate-pulse"></div>
                      </div>
                      <div className="h-4 w-full bg-slate-700/50 rounded animate-pulse mb-3"></div>
                      <div className="flex items-center space-x-4">
                        <div className="h-3 w-20 bg-slate-700/50 rounded animate-pulse"></div>
                        <div className="h-3 w-24 bg-slate-700/50 rounded animate-pulse"></div>
                        <div className="h-3 w-16 bg-slate-700/50 rounded animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 ml-4">
                    <div className="h-5 w-12 bg-slate-700/50 rounded animate-pulse"></div>
                    <div className="flex space-x-1">
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
  )
}
