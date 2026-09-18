import React from "react";
import Navbar from "../../others/navbar";

function AiIndex() {

    const banks = [
        {
            name: "HDFCBANK",
            weight: "13.2%",
            price: "₹1,724.50",
            change: "+0.94%",
            imbalance: 72,
            volume: "18.4M",
            depthChange: "+14.8%",
            oiChange: "+6.2%",
            score: 84,
            signal: "BUY"
        },
        {
            name: "ICICIBANK",
            weight: "9.8%",
            price: "₹1,240.20",
            change: "+1.45%",
            imbalance: 68,
            volume: "16.2M",
            depthChange: "+11.4%",
            oiChange: "+5.8%",
            score: 79,
            signal: "BUY"
        },
        {
            name: "SBIN",
            weight: "8.2%",
            price: "₹812.40",
            change: "+1.12%",
            imbalance: 61,
            volume: "21.8M",
            depthChange: "+9.6%",
            oiChange: "+4.2%",
            score: 74,
            signal: "BUY"
        },
        {
            name: "AXISBANK",
            weight: "7.1%",
            price: "₹1,182.30",
            change: "-0.42%",
            imbalance: -48,
            volume: "9.4M",
            depthChange: "-8.2%",
            oiChange: "-3.4%",
            score: -55,
            signal: "SELL"
        },
        {
            name: "KOTAKBANK",
            weight: "5.6%",
            price: "₹2,010.40",
            change: "+0.28%",
            imbalance: 21,
            volume: "5.8M",
            depthChange: "+2.4%",
            oiChange: "+1.8%",
            score: 28,
            signal: "BUY"
        },
        {
            name: "BANKBARODA",
            weight: "3.4%",
            price: "₹248.60",
            change: "-0.31%",
            imbalance: -26,
            volume: "8.2M",
            depthChange: "-4.6%",
            oiChange: "-2.1%",
            score: -31,
            signal: "SELL"
        }
    ];

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-zinc-50 px-4 py-6 text-zinc-900 dark:bg-[#08090b] dark:text-white md:px-8 lg:px-12">
                <div className="mx-auto max-w-[1500px]">
                    <div className="mb-6">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="h-2 w-2 rounded-full bg-emerald-500" />
                            <span className="text-xs font-medium tracking-[0.18em] text-emerald-500">ROCK AI · ORDER FLOW INTELLIGENCE</span>
                        </div>
                        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
                            <div>
                                <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Bank Nifty Flow</h1>
                                <p className="mt-2 text-sm text-zinc-500">Real-time constituent order flow, volume, depth, futures OI and weighted market pressure.</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                                <span className="text-xs font-medium text-emerald-500">MARKET OPEN</span>
                            </div>
                        </div>
                    </div>
                    <div className="mb-6 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60">
                        <div className="grid gap-6 lg:grid-cols-4">
                            <div>
                                <p className="text-xs text-zinc-500">BANK NIFTY</p>
                                <p className="mt-2 text-4xl font-bold">52,248.35</p>
                                <div className="mt-2 flex gap-2">
                                    <span className="text-sm font-semibold text-emerald-500">+384.25</span>
                                    <span className="text-sm font-semibold text-emerald-500">+0.74%</span>
                                </div>
                            </div>
                            <div>
                                <p className="text-xs text-zinc-500">NET ORDER FLOW</p>
                                <p className="mt-2 text-3xl font-bold text-emerald-500">+64</p>
                                <p className="mt-1 text-xs text-zinc-500">Strong buying pressure</p>
                            </div>
                            <div>
                                <p className="text-xs text-zinc-500">MARKET PRESSURE</p>
                                <div className="mt-3 flex items-center gap-3">
                                    <span className="text-lg font-bold text-emerald-500">68% BUY</span>
                                    <span className="text-zinc-400">/</span>
                                    <span className="text-lg font-bold text-red-500">32% SELL</span>
                                </div>
                                <div className="mt-3 h-2 overflow-hidden rounded-full bg-red-100">
                                    <div className="h-full w-[68%] bg-emerald-500" />
                                </div>
                            </div>
                            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-900/40 dark:bg-emerald-500/5">
                                <p className="text-xs text-zinc-500">FLOW MODEL</p>
                                <p className="mt-2 text-xl font-bold text-emerald-500">UPWARD PRESSURE</p>
                                <p className="mt-1 text-xs text-zinc-500">Confidence: 74%</p>
                            </div>
                        </div>
                    </div>
                    <SectionTitle title="Flow Components" subtitle="Signals used to calculate Bank Nifty directional pressure" />
                    <div className="mb-8 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
                        <Metric title="Order Imbalance" value="+64%" positive />
                        <Metric title="Traded Volume" value="1.42x Avg" positive />
                        <Metric title="Depth Change" value="+12.8%" positive />
                        <Metric title="Price Momentum" value="+0.74%" positive />
                        <Metric title="Futures OI" value="+6.4%" positive />
                        <Metric title="Weighted Flow" value="+71" positive />
                    </div>
                    <div className="mb-8 grid gap-5 lg:grid-cols-2">
                        <Panel title="Order Book Pressure" subtitle="Aggregated bid and ask pressure across constituents">
                            <div className="p-5 space-y-6">
                                <FlowBar title="Buy Quantity" value="8.42 Cr" percent="68%" positive />
                                <FlowBar title="Sell Quantity" value="3.94 Cr" percent="32%" />
                                <div className="grid grid-cols-2 gap-4">
                                    <DataCard title="Buy / Sell Ratio" value="2.13x" positive />
                                    <DataCard title="Net Imbalance" value="+4.48 Cr" positive />
                                </div>
                            </div>
                        </Panel>
                        <Panel title="Market Flow" subtitle="Real-time participation and price behaviour">
                            <div className="p-5 space-y-5">
                                <StatusRow title="Price Direction" value="UP" positive />
                                <StatusRow title="Trade Volume" value="Above Average" positive />
                                <StatusRow title="Bid Depth" value="+14.2%" positive />
                                <StatusRow title="Ask Depth" value="-6.8%" positive />
                                <StatusRow title="Futures OI" value="+6.4%" positive />
                                <StatusRow title="Positioning" value="Long Buildup" positive />
                            </div>
                        </Panel>
                    </div>
                    <SectionTitle title="Constituent Contribution" subtitle="Weighted contribution of Bank Nifty constituents" />
                    <div className="mb-8 overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900/60">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="border-b border-zinc-200 dark:border-zinc-800">
                                    <tr className="text-xs text-zinc-500">
                                        <th className="px-5 py-4">Bank</th>
                                        <th className="px-5 py-4">Weight</th>
                                        <th className="px-5 py-4">Price</th>
                                        <th className="px-5 py-4">Imbalance</th>
                                        <th className="px-5 py-4">Volume</th>
                                        <th className="px-5 py-4">Depth</th>
                                        <th className="px-5 py-4">OI</th>
                                        <th className="px-5 py-4">Flow Score</th>
                                        <th className="px-5 py-4">Signal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {banks.map((bank) => (
                                        <tr key={bank.name} className="border-b border-zinc-100 last:border-0 dark:border-zinc-800">
                                            <td className="px-5 py-4 font-semibold">{bank.name}</td>
                                            <td className="px-5 py-4 text-sm text-zinc-500">{bank.weight}</td>
                                            <td className="px-5 py-4 text-sm">
                                                {bank.price}
                                                <span className={`ml-2 text-xs font-semibold ${bank.change.startsWith("+") ? "text-emerald-500" : "text-red-500"}`}>{bank.change}</span>
                                            </td>
                                            <td className="px-5 py-4">
                                                <span className={`font-semibold ${bank.imbalance >= 0 ? "text-emerald-500" : "text-red-500"}`}>{bank.imbalance > 0 ? "+" : ""}{bank.imbalance}%</span>
                                            </td>
                                            <td className="px-5 py-4 text-sm">{bank.volume}</td>
                                            <td className={`px-5 py-4 text-sm font-medium ${bank.depthChange.startsWith("+") ? "text-emerald-500" : "text-red-500"}`}>{bank.depthChange}</td>
                                            <td className={`px-5 py-4 text-sm font-medium ${bank.oiChange.startsWith("+") ? "text-emerald-500" : "text-red-500"}`}>{bank.oiChange}</td>
                                            <td className={`px-5 py-4 font-bold ${bank.score >= 0 ? "text-emerald-500" : "text-red-500"}`}>{bank.score > 0 ? "+" : ""}{bank.score}</td>
                                            <td className="px-5 py-4">
                                                <span className={`rounded-md px-2 py-1 text-[10px] font-semibold ${bank.signal === "BUY" ? "bg-emerald-500/10 text-emerald-500" : "bg-red-500/10 text-red-500"}`}>{bank.signal}</span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="mb-8 grid gap-5 lg:grid-cols-2">
                        <Panel title="Top Buying Pressure" subtitle="Constituents contributing positive flow">
                            <div className="p-5 space-y-4">
                                {banks.filter((bank) => bank.score > 0).slice(0, 4).map((bank) => (
                                    <Contribution key={bank.name} name={bank.name} score={bank.score} weight={bank.weight} positive />
                                ))}
                            </div>
                        </Panel>
                        <Panel title="Top Selling Pressure" subtitle="Constituents contributing negative flow">
                            <div className="p-5 space-y-4">
                                {banks.filter((bank) => bank.score < 0).map((bank) => (
                                    <Contribution key={bank.name} name={bank.name} score={bank.score} weight={bank.weight} />
                                ))}
                            </div>
                        </Panel>
                    </div>
                    <div className="mb-8 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60">
                        <SectionHeader title="Bank Nifty Flow Model" subtitle="Combined signal generated from multiple market inputs" />
                        <div className="grid gap-5 p-5 md:grid-cols-3">
                            <ModelCard title="Direction" value="UPWARD" subtitle="Buying pressure dominates" positive />
                            <ModelCard title="Strength" value="STRONG" subtitle="Weighted flow score +64" positive />
                            <ModelCard title="Confidence" value="74%" subtitle="Based on current market data" positive />
                        </div>
                    </div>
                    <div className="rounded-2xl border border-zinc-200 bg-zinc-100 p-5 text-xs leading-6 text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900/50">
                        <b className="text-zinc-800 dark:text-zinc-200">Data-Driven Analysis</b>
                        <br />
                        This dashboard analyses order flow, traded volume, market depth, price movement, futures open interest and constituent weights. The output represents statistical market pressure and is not a guaranteed prediction of future price movement.
                    </div>
                </div>
            </main>
        </>
    );
}

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
            <p className={`mt-2 text-sm font-semibold ${positive ? "text-emerald-500" : ""}`}>{value}</p>
        </div>
    );
}

function Panel({ title, subtitle, children }) {
    return (
        <div className="rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900/60">
            <SectionHeader title={title} subtitle={subtitle} />
            {children}
        </div>
    );
}

function DataCard({ title, value, positive }) {
    return (
        <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-950/40">
            <p className="text-[11px] text-zinc-500">{title}</p>
            <p className={`mt-2 text-base font-bold ${positive ? "text-emerald-500" : ""}`}>{value}</p>
        </div>
    );
}

function StatusRow({ title, value, positive }) {
    return (
        <div className="flex items-center justify-between text-sm">
            <span className="text-zinc-500">{title}</span>
            <span className={`font-medium ${positive ? "text-emerald-500" : "text-red-500"}`}>{value}</span>
        </div>
    );
}

function FlowBar({ title, value, percent, positive }) {
    return (
        <div>
            <div className="mb-2 flex justify-between">
                <span className="text-sm text-zinc-500">{title}</span>
                <span className={`text-sm font-semibold ${positive ? "text-emerald-500" : "text-red-500"}`}>{value} · {percent}</span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
                <div className={`h-full ${positive ? "bg-emerald-500" : "bg-red-500"}`} style={{ width: percent }} />
            </div>
        </div>
    );
}

function Contribution({ name, score, weight, positive }) {
    return (
        <div>
            <div className="mb-2 flex items-center justify-between">
                <div>
                    <span className="text-sm font-semibold">{name}</span>
                    <span className="ml-2 text-xs text-zinc-500">{weight}</span>
                </div>
                <span className={`text-sm font-bold ${positive ? "text-emerald-500" : "text-red-500"}`}>{score > 0 ? "+" : ""}{score}</span>
            </div>
            <div className="h-2 rounded-full bg-zinc-100 dark:bg-zinc-800">
                <div className={`h-full rounded-full ${positive ? "bg-emerald-500" : "bg-red-500"}`} style={{ width: `${Math.min(Math.abs(score), 100)}%` }} />
            </div>
        </div>
    );
}

function ModelCard({ title, value, subtitle, positive }) {
    return (
        <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-950/40">
            <p className="text-xs text-zinc-500">{title}</p>
            <p className={`mt-2 text-2xl font-bold ${positive ? "text-emerald-500" : "text-red-500"}`}>{value}</p>
            <p className="mt-1 text-xs text-zinc-500">{subtitle}</p>
        </div>
    );
}

export default AiIndex;