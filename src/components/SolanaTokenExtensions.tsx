'use client'

import { useState, useMemo } from 'react'

import {Check, X, HelpCircle, ExternalLink, Search, Info, Clock} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { tokenExtensions } from '@/data/tokenExtensions'
import { compatibilityData } from '@/data/compatibilityData'
import Link from "next/link";

export default function SolanaTokenExtensions() {
  const [serviceFilter, setServiceFilter] = useState('All')
  const [extensionFilter, setExtensionFilter] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredData = useMemo(() => {
    return compatibilityData
      .filter(item => serviceFilter === 'All' || item.type === serviceFilter)
      .filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        Object.keys(item.extensions).some(ext => ext.toLowerCase().includes(searchTerm.toLowerCase()))
      )
  }, [serviceFilter, searchTerm])

  const filteredExtensions = useMemo(() => {
    return extensionFilter === 'All'
      ? tokenExtensions
      : tokenExtensions.filter(ext => ext.name === extensionFilter)
  }, [extensionFilter])

  return (
    <>
      <div className="min-h-screen bg-black text-white overflow-x-hidden flex flex-col">
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="fixed top-0 -left-1/4 w-1/2 h-1/2 bg-[#9945FF] rounded-full blur-[150px] opacity-20"></div>
          <div className="fixed bottom-0 -right-1/4 w-1/2 h-1/2 bg-[#14F195] rounded-full blur-[150px] opacity-20"></div>
        </div>
        <div className="relative z-10 flex-grow">
          <header className="max-w-7xl mx-auto pt-20 pb-12 px-4">
            <h1 className="text-5xl font-bold mb-4">Solana Token Extensions</h1>
            <p className="text-2xl text-gray-400 mb-8">Explore compatibility across DEXes and Wallets</p>
          </header>

          <section className="max-w-7xl mx-auto py-12 px-4">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-white">What are Solana Token Extensions?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-lg mb-6">
                  Solana Token Extensions provide additional features and capabilities to tokens on the Solana blockchain, enabling more complex and versatile token behaviors. These extensions allow for innovative use cases and enhanced functionality within the Solana ecosystem.
                </p>
                <Link
                  href="https://solana.com/solutions/token-extensions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gradient-to-r from-[#9945FF] to-[#14F195] text-white font-bold py-2 px-6 rounded-full hover:opacity-90 transition-opacity"
                >
                  Learn More <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </section>

          <main className="max-w-7xl mx-auto space-y-12 px-4 pb-20">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-white">Compatibility Matrix</CardTitle>
                <CardDescription className="text-[#14F195] text-lg">
                  Check which applications support specific Solana Token Extensions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                  <div className="flex items-center gap-2 w-full md:w-auto">
                    <Search className="text-gray-400"/>
                    <Input
                      placeholder="Search apps or extensions"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="bg-gray-800 border-gray-700 text-white w-full"
                    />
                  </div>
                  <div className="flex gap-2 w-full md:w-auto">
                    <Select onValueChange={setServiceFilter} defaultValue={serviceFilter}>
                      <SelectTrigger className="w-full md:w-[180px] bg-gray-800 text-[#14F195] border-gray-700">
                        <SelectValue placeholder="Filter apps"/>
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-700 text-white">
                        <SelectItem value="All"
                                    className="hover:text-[#14F195] data-[highlighted]:bg-transparent data-[highlighted]:text-[#14F195]">All
                          Apps</SelectItem>
                        <SelectItem value="DEX"
                                    className="hover:text-[#14F195] data-[highlighted]:bg-transparent data-[highlighted]:text-[#14F195]">DEXes</SelectItem>
                        <SelectItem value="Wallet"
                                    className="hover:text-[#14F195] data-[highlighted]:bg-transparent data-[highlighted]:text-[#14F195]">Wallets</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select onValueChange={setExtensionFilter} defaultValue={extensionFilter}>
                      <SelectTrigger className="w-full md:w-[180px] bg-gray-800 text-[#14F195] border-gray-700">
                        <SelectValue placeholder="Filter extensions"/>
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-700 text-white max-h-[300px] overflow-y-auto">
                        <SelectItem value="All"
                                    className="hover:text-[#14F195] data-[highlighted]:bg-transparent data-[highlighted]:text-[#14F195]">All
                          Extensions</SelectItem>
                        {tokenExtensions.map(ext => (
                          <SelectItem key={ext.name} value={ext.name}
                                      className="hover:text-[#14F195] data-[highlighted]:bg-transparent data-[highlighted]:text-[#14F195]">{ext.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="overflow-x-auto rounded-lg">
                  <table className="w-full border-collapse">
                    <thead>
                    <tr className="bg-gray-800 rounded-t-lg overflow-hidden">
                      <th
                        className="p-2 text-left font-bold text-gray-400 sticky left-0 bg-gray-800 z-20 rounded-tl-lg">App
                      </th>
                      {filteredExtensions.map((ext, index) => (
                        <th
                          key={ext.name}
                          className={`p-2 text-center font-bold text-[#14F195] whitespace-nowrap ${
                            index === filteredExtensions.length - 1 ? 'rounded-tr-lg' : ''
                          }`}
                        >
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button variant="link" className="text-[#14F195] hover:text-white">
                                {ext.name} <Info className="ml-1 h-4 w-4"/>
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-80 bg-gray-800 border-gray-700 text-white z-50">
                              <h3 className="text-lg font-semibold mb-2">{ext.name}</h3>
                              <p className="text-sm text-gray-300 mb-4">{ext.description}</p>
                              <a
                                href={ext.docLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#14F195] hover:underline text-sm flex items-center"
                              >
                                View Documentation <ExternalLink className="ml-1 h-4 w-4"/>
                              </a>
                            </PopoverContent>
                          </Popover>
                        </th>
                      ))}
                    </tr>
                    </thead>
                    <tbody>
                    {filteredData.map(item => (
                      <tr key={item.name} className="border-t border-gray-800">
                        <td className="p-2 font-semibold text-white sticky left-0 bg-gray-900 z-10">{item.name}</td>
                        {filteredExtensions.map(ext =>
                          <td key={`${item.name}-${ext.name}`} className="p-2 text-center">
                            <CompatibilityIcon status={item.extensions[ext.name]}/>
                          </td>
                        )}
                      </tr>
                    ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 p-4 bg-gray-800 bg-opacity-50 rounded-md">
                  <div className="flex flex-wrap gap-4 text-xs text-gray-400">
                    <div className="flex items-center gap-2">
                      <Check className="text-[#14F195] h-4 w-4"/>
                      <span>Supported</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <X className="text-red-500 h-4 w-4"/>
                      <span>Not Supported</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="text-yellow-500 h-4 w-4"/>
                      <span>Planned</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <HelpCircle className="text-gray-500 h-4 w-4"/>
                      <span>Unknown</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500 h-4 w-4">-</span>
                      <span>Not Applicable</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">Get Involved</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-400">
                  Whether you&apos;re a developer, project manager, or enthusiast, there are many ways to contribute to the
                  Solana ecosystem and help advance Token Extensions. Join our community to stay updated and collaborate
                  on the future of decentralized finance.
                </p>
                <Link
                  href="https://solana.com/discord"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gradient-to-r from-[#9945FF] to-[#14F195] text-white font-bold py-2 px-6 rounded-full hover:opacity-90 transition-opacity"
                >
                  Join Discord <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </main>

          <footer className="max-w-7xl mx-auto mt-12 text-center text-gray-600 pb-8">
            <p className="text-sm">
              This site is not affiliated with or endorsed by the Solana Foundation.
            </p>
            <p className="text-sm mt-2">
              Made with ❤️ by <a href="https://github.com/dhl" target="_blank" rel="noopener noreferrer"
                                 className="text-[#14F195] hover:underline">@dhl</a>
            </p>
          </footer>
        </div>
      </div>
    </>
  )
}


function CompatibilityIcon({ status }: { status: boolean | null | undefined | 'planned' | 'N/A' }) {
  if (status === true) {
    return <Check className="text-[#14F195] mx-auto" />
  } else if (status === false) {
    return <X className="text-red-500 mx-auto" />
  } else if (status === 'planned') {
    return <Clock className="text-yellow-500 mx-auto" />
  } else if (status === 'N/A') {
    return <span className="text-gray-500 mx-auto">-</span>
  } else {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <HelpCircle className="text-gray-500 mx-auto" />
          </TooltipTrigger>
          <TooltipContent>
            <p>Unknown</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
  }
}