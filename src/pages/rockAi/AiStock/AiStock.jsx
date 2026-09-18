import React, { useEffect, useState } from "react";
import Navbar from "../../others/navbar";
import { stockDetails } from "../../service/rockAiService";

function AiStock() {
    const [search, setSearch] = useState("");
    const [selectedStock, setSelectedStock] = useState(null);
    const [oiTimeframe, setOiTimeframe] = useState("day");

    useEffect(() => {
        if (search.trim().length > 0) {
            const searchStock = async () => {
                try {
                    const res = await stockDetails(search);
                    setSelectedStock(res);
                } catch (error) {
                    console.log("Stock search error:", error);
                }
            };
            const timer = setTimeout(searchStock, 500);
            return () => clearTimeout(timer);
        }
    }, [search]);

    const stock = selectedStock || {
        symbol: "RELIANCE", name: "Reliance Industries Ltd.", exchange: "NSE", sector: "Oil, Gas & Conglomerate",
        price: 1418.60, change: 18.40, changePercent: 1.31,
        previousClose: 1400.20, open: 1406.00, dayHigh: 1428.90, dayLow: 1398.40,
        weekHigh: 1456.80, weekLow: 1352.20, yearHigh: 1620.00, yearLow: 1114.60,
        volume: "8.42M", avgVolume: "6.91M", marketCap: "₹19.20T", pe: 24.8, pb: 2.15, eps: 57.20, dividendYield: 0.35,
        roe: 9.8, roce: 10.7, debtEquity: 0.41, rsi: 62.4, macd: "Bullish", ema20: 1382.40, ema50: 1348.60, ema200: 1296.20,
        trend: "Bullish", weeklyTrend: "Bullish", monthlyTrend: "Bullish", volatility: "Moderate",
        oi: {
            day: { buyOI: "12.40L", sellOI: "10.80L", buyOIChange: "+8.2%", sellOIChange: "+3.1%", oiChange: "+5.6%", volume: "24.80M" },
            week: { buyOI: "38.60L", sellOI: "34.20L", buyOIChange: "+12.4%", sellOIChange: "+7.8%", oiChange: "+9.8%", volume: "82.40M" },
            month: { buyOI: "1.24Cr", sellOI: "1.16Cr", buyOIChange: "+18.6%", sellOIChange: "+14.2%", oiChange: "+16.4%", volume: "2.84Cr" }
        },
        news: [
            { title: "Reliance announces expansion in new energy business", effect: "Positive", time: "2h ago" },
            { title: "Brokerage maintains positive outlook on the company", effect: "Positive", time: "5h ago" },
            { title: "Global crude prices remain volatile", effect: "Neutral", time: "7h ago" }
        ]
    };

    const oi = stock.oi?.[oiTimeframe] || { buyOI: "-", sellOI: "-", buyOIChange: "-", sellOIChange: "-", oiChange: "-", volume: "-" };

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-zinc-50 px-4 py-6 text-zinc-900 transition-colors duration-300 dark:bg-[#08090b] dark:text-white md:px-8 lg:px-12">
                <div className="mx-auto max-w-7xl">
                    
                    {/* HEADER */}
                    <div className="mb-6">
                        <div className="mb-2 flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.6)]" />
                            <span className="text-sm font-medium tracking-wide text-emerald-600 dark:text-emerald-400">ROCK ANALYSIS</span>
                        </div>
                        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Stock Analysis</h1>
                        <p className="mt-2 max-w-2xl text-sm text-zinc-500 md:text-base">Research stocks using market data, fundamentals, technical indicators and AI-powered insights.</p>
                    </div>

                    {/* SEARCH */}
                    <div className="relative mb-8">
                        <div className="flex h-[52px] items-center rounded-xl border border-zinc-200 bg-white px-4 shadow-sm transition focus-within:border-emerald-500/60 dark:border-zinc-800 dark:bg-zinc-900/80">
                            <span className="mr-3 text-xl text-zinc-400">⌕</span>
                            <input type="text" placeholder="Search stocks by name or symbol..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full bg-transparent text-sm outline-none placeholder:text-zinc-400 dark:placeholder:text-zinc-600" />
                            <span className="hidden rounded-md bg-zinc-100 px-2 py-1 text-[10px] text-zinc-500 dark:bg-zinc-800 md:block">NSE</span>
                        </div>
                    </div>

                    {/* STOCK HEADER */}
                    <div className="mb-5 rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900/60 md:p-6">
                        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                            <div>
                                <div className="flex flex-wrap items-center gap-3">
                                    <h2 className="text-2xl font-bold">{stock.name}</h2>
                                    <span className="rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">{stock.symbol}</span>
                                    <span className="rounded-md bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">{stock.exchange}</span>
                                </div>
                                <p className="mt-2 text-sm text-zinc-500">{stock.sector}</p>
                            </div>
                            <div className="md:text-right">
                                <p className="text-3xl font-bold">₹{stock.price.toLocaleString()}</p>
                                <p className="mt-1 text-sm font-medium text-emerald-600 dark:text-emerald-400">+₹{stock.change} (+{stock.changePercent}%)</p>
                            </div>
                        </div>
                    </div>

                    {/* MARKET SNAPSHOT */}
                    <SectionTitle title="Market Snapshot" subtitle="Current trading information" />
                    <div className="mb-8 grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-6">
                        <Metric title="Previous Close" value={`₹${stock.previousClose}`} />
                        <Metric title="Open" value={`₹${stock.open}`} />
                        <Metric title="Day High" value={`₹${stock.dayHigh}`} positive />
                        <Metric title="Day Low" value={`₹${stock.dayLow}`} />
                        <Metric title="Volume" value={stock.volume} />
                        <Metric title="Avg Volume" value={stock.avgVolume} />
                    </div>

                    {/* FUNDAMENTALS + TECHNICAL */}
                    <div className="mb-8 grid gap-5 lg:grid-cols-2">
                        <div className="panel rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900/60">
                            <SectionHeader title="Fundamentals" subtitle="Important data for long-term investors" />
                            <div className="grid grid-cols-2 divide-x divide-zinc-200 dark:divide-zinc-800">
                                <div className="space-y-5 p-5">
                                    <DataRow title="Market Cap" value={stock.marketCap} />
                                    <DataRow title="P/E Ratio" value={stock.pe} />
                                    <DataRow title="P/B Ratio" value={stock.pb} />
                                    <DataRow title="EPS" value={`₹${stock.eps}`} />
                                </div>
                                <div className="space-y-5 p-5">
                                    <DataRow title="Dividend Yield" value={`${stock.dividendYield}%`} />
                                    <DataRow title="ROE" value={`${stock.roe}%`} />
                                    <DataRow title="ROCE" value={`${stock.roce}%`} />
                                    <DataRow title="Debt / Equity" value={stock.debtEquity} />
                                </div>
                            </div>
                        </div>

                        <div className="panel rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900/60">
                            <SectionHeader title="Technical Overview" subtitle="Useful for swing and positional analysis" />
                            <div className="grid grid-cols-2 divide-x divide-zinc-200 dark:divide-zinc-800">
                                <div className="space-y-5 p-5">
                                    <DataRow title="RSI (14)" value={stock.rsi} valueClass={stock.rsi > 70 ? "text-red-500" : "text-emerald-500"} />
                                    <DataRow title="MACD" value={stock.macd} valueClass="text-emerald-500" />
                                    <DataRow title="EMA 20" value={`₹${stock.ema20}`} />
                                    <DataRow title="EMA 50" value={`₹${stock.ema50}`} />
                                </div>
                                <div className="space-y-5 p-5">
                                    <DataRow title="EMA 200" value={`₹${stock.ema200}`} />
                                    <DataRow title="Weekly Trend" value={stock.weeklyTrend} valueClass="text-emerald-500" />
                                    <DataRow title="Monthly Trend" value={stock.monthlyTrend} valueClass="text-emerald-500" />
                                    <DataRow title="Volatility" value={stock.volatility} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* OPEN INTEREST */}
                    <SectionTitle title="Open Interest & Participation" subtitle="Derivative positioning and market participation" />
                    <div className="mb-8 overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900/60">
                        <div className="flex items-center justify-between border-b border-zinc-200 p-4 dark:border-zinc-800">
                            <div>
                                <p className="text-sm font-medium">OI Analysis</p>
                                <p className="mt-1 text-[11px] text-zinc-500">Select period</p>
                            </div>
                            <div className="flex rounded-lg bg-zinc-100 p-1 dark:bg-zinc-800">
                                {[["day", "Day"], ["week", "Week"], ["month", "Month"]].map(([key, label]) => (
                                    <button key={key} onClick={() => setOiTimeframe(key)} className={`rounded-md px-3 py-1.5 text-xs font-medium transition ${oiTimeframe === key ? "bg-white text-zinc-900 shadow-sm dark:bg-zinc-700 dark:text-white" : "text-zinc-500 hover:text-zinc-900 dark:hover:text-white"}`}>{label}</button>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3 p-4 md:grid-cols-4">
                            <OICard title="Buy OI" value={oi.buyOI} change={oi.buyOIChange} positive />
                            <OICard title="Sell OI" value={oi.sellOI} change={oi.sellOIChange} />
                            <OICard title="OI Change" value={oi.oiChange} change="Open Interest" positive={String(oi.oiChange).startsWith("+")} />
                            <OICard title="Volume" value={oi.volume} change="Trading activity" />
                        </div>

                        <div className="mx-4 mb-4 rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-950/50">
                            <div className="flex items-start gap-3">
                                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-sm text-emerald-500">AI</div>
                                <div>
                                    <p className="text-sm font-semibold">OI Interpretation</p>
                                    <p className="mt-1 text-xs leading-5 text-zinc-500">Increasing price with increasing OI can indicate long buildup, while decreasing price with increasing OI can indicate short buildup. OI should be interpreted together with price and volume rather than alone.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RANGE */}
                    <SectionTitle title="Price Range" subtitle="52-week and recent price range" />
                    <div className="mb-8 grid gap-5 md:grid-cols-2">
                        <RangeCard title="52 Week Range" low={stock.yearLow} high={stock.yearHigh} current={stock.price} />
                        <RangeCard title="Recent Weekly Range" low={stock.weekLow} high={stock.weekHigh} current={stock.price} />
                    </div>

                    {/* MARKET VIEW */}
                    <SectionTitle title="Market View" subtitle="Quick summary of current market structure" />
                    <div className="mb-8 grid grid-cols-2 gap-3 md:grid-cols-4">
                        <ViewCard title="Overall Trend" value={stock.trend} positive />
                        <ViewCard title="Weekly" value={stock.weeklyTrend} positive />
                        <ViewCard title="Monthly" value={stock.monthlyTrend} positive />
                        <ViewCard title="Volatility" value={stock.volatility} />
                    </div>

                    {/* NEWS */}
                    <SectionTitle title="Latest Stock News" subtitle="Recent events that may affect the stock" />
                    <div className="mb-10 overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900/60">
                        {stock.news.map((item, index) => (
                            <div key={index} className={`flex items-center justify-between gap-4 p-5 hover:bg-zinc-50 dark:hover:bg-zinc-800/40 ${index !== stock.news.length - 1 ? "border-b border-zinc-200 dark:border-zinc-800" : ""}`}>
                                <div className="flex items-start gap-3">
                                    <span className={`mt-1 h-2 w-2 rounded-full ${item.effect === "Positive" ? "bg-emerald-500" : item.effect === "Negative" ? "bg-red-500" : "bg-zinc-400"}`} />
                                    <div>
                                        <p className="text-sm font-medium">{item.title}</p>
                                        <p className="mt-1 text-xs text-zinc-500">{item.time}</p>
                                    </div>
                                </div>
                                <span className={`shrink-0 rounded-md px-2 py-1 text-[10px] font-medium ${item.effect === "Positive" ? "bg-emerald-500/10 text-emerald-500" : item.effect === "Negative" ? "bg-red-500/10 text-red-500" : "bg-zinc-100 text-zinc-500 dark:bg-zinc-800"}`}>{item.effect}</span>
                            </div>
                        ))}
                    </div>

                    {/* DISCLAIMER */}
                    <div className="pb-8 text-center">
                        <p className="mx-auto max-w-3xl text-[11px] leading-5 text-zinc-500">Market Rock provides informational market data and analysis for educational purposes. OI, trends and AI-generated insights are not guaranteed predictions or financial advice.</p>
                    </div>

                </div>
            </div>
        </>
    );
}

/* =========================================================
   REUSABLE COMPONENTS
========================================================= */

function SectionTitle({ title, subtitle }) {
    return (
        <div className="mb-4">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="mt-1 text-xs text-zinc-500">{subtitle}</p>
        </div>
    );
}

function SectionHeader({ title, subtitle }) {
    return (
        <div className="border-b border-zinc-200 p-5 dark:border-zinc-800">
            <h2 className="font-semibold">{title}</h2>
            <p className="mt-1 text-xs text-zinc-500">{subtitle}</p>
        </div>
    );
}

function Metric({ title, value, positive }) {
    return (
        <div className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900/60">
            <p className="text-[11px] text-zinc-500">{title}</p>
            <p className={`mt-2 text-sm font-semibold ${positive ? "text-emerald-600 dark:text-emerald-400" : ""}`}>{value}</p>
        </div>
    );
}

function DataRow({ title, value, valueClass = "" }) {
    return (
        <div className="flex items-center justify-between gap-3">
            <span className="text-xs text-zinc-500">{title}</span>
            <span className={`text-sm font-semibold ${valueClass}`}>{value}</span>
        </div>
    );
}

function OICard({ title, value, change, positive }) {
    return (
        <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-950/40">
            <p className="text-[11px] text-zinc-500">{title}</p>
            <p className={`mt-2 text-xl font-bold ${positive ? "text-emerald-500" : title === "Sell OI" ? "text-red-500" : ""}`}>{value}</p>
            <p className={`mt-1 text-[10px] ${positive ? "text-emerald-500" : title === "Sell OI" ? "text-red-500" : "text-zinc-500"}`}>{change}</p>
        </div>
    );
}

function ViewCard({ title, value, positive }) {
    return (
        <div className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900/60">
            <p className="text-xs text-zinc-500">{title}</p>
            <p className={`mt-2 text-lg font-semibold ${positive ? "text-emerald-600 dark:text-emerald-400" : ""}`}>{value}</p>
        </div>
    );
}

function RangeCard({ title, low, high, current }) {
    const percentage = ((current - low) / (high - low)) * 100;
    return (
        <div className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900/60">
            <div className="flex items-center justify-between">
                <p className="text-sm font-medium">{title}</p>
                <p className="text-xs text-zinc-500">Current ₹{current}</p>
            </div>
            <div className="mt-6">
                <div className="relative h-1.5 rounded-full bg-zinc-200 dark:bg-zinc-800">
                    <div className="h-full rounded-full bg-emerald-500" style={{ width: `${Math.min(Math.max(percentage, 0), 100)}%` }} />
                    <div className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border-2 border-white bg-emerald-500 dark:border-zinc-900" style={{ left: `calc(${Math.min(Math.max(percentage, 0), 100)}% - 6px)` }} />
                </div>
                <div className="mt-3 flex justify-between">
                    <div>
                        <p className="text-[10px] text-zinc-500">LOW</p>
                        <p className="mt-1 text-sm font-semibold">₹{low}</p>
                    </div>
                    <div className="text-right">
                        <p className="text-[10px] text-zinc-500">HIGH</p>
                        <p className="mt-1 text-sm font-semibold">₹{high}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AiStock;