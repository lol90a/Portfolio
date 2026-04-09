import { motion } from "motion/react";
import { ArrowDownRight, ArrowUpRight, Search, Download, Filter, FileText, ExternalLink } from "lucide-react";

const transactions = [
  { id: "AL-9281-FX", type: "Flight Booking", asset: "USDC", network: "Ethereum", amount: "45,000", status: "Completed", date: "Oct 24, 2026", hash: "0x8f...4e21" },
  { id: "AL-9280-DP", type: "Deposit", asset: "BTC", network: "Bitcoin", amount: "2.5", status: "Completed", date: "Oct 23, 2026", hash: "3J98...x9p" },
  { id: "AL-9279-AC", type: "Aircraft Inquiry (Escrow)", asset: "ETH", network: "Ethereum", amount: "1,200", status: "Pending", date: "Oct 20, 2026", hash: "0x1a...f99b" },
  { id: "AL-9278-FX", type: "Flight Booking", asset: "USDT", network: "Tron", amount: "12,500", status: "Completed", date: "Oct 18, 2026", hash: "TEj5...PqL" },
  { id: "AL-9277-AC", type: "Aircraft Purchase (Final)", asset: "BTC", network: "Bitcoin", amount: "418.8", status: "Completed", date: "Sep 15, 2026", hash: "bc1q...x0v" },
  { id: "AL-9276-FX", type: "Flight Booking", asset: "SOL", network: "Solana", amount: "150", status: "Failed", date: "Sep 10, 2026", hash: "5KjL...wT8" },
];

export default function Transactions() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Transaction History</h1>
          <p className="text-slate-400">View and track all your payments, escrows, and flight settlements.</p>
        </div>
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input 
              type="text" 
              placeholder="Search ID or Hash..." 
              className="w-full pl-11 pr-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors text-sm"
            />
          </div>
          <button className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
            <Filter className="w-4 h-4 text-slate-300" />
          </button>
          <button className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex items-center gap-2 px-4 text-sm text-white font-medium">
            <Download className="w-4 h-4" /> CSV
          </button>
        </div>
      </div>

      <div className="w-full overflow-x-auto rounded-3xl bg-[#0A0A0E] border border-white/5">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="border-b border-white/5 bg-white/5">
              <th className="py-4 px-6 text-xs uppercase tracking-wider font-semibold text-slate-500">Transaction ID</th>
              <th className="py-4 px-6 text-xs uppercase tracking-wider font-semibold text-slate-500">Date</th>
              <th className="py-4 px-6 text-xs uppercase tracking-wider font-semibold text-slate-500">Type</th>
              <th className="py-4 px-6 text-xs uppercase tracking-wider font-semibold text-slate-500">Amount & Asset</th>
              <th className="py-4 px-6 text-xs uppercase tracking-wider font-semibold text-slate-500">Network</th>
              <th className="py-4 px-6 text-xs uppercase tracking-wider font-semibold text-slate-500">Status</th>
              <th className="py-4 px-6 text-xs uppercase tracking-wider font-semibold text-slate-500">Hash</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx, idx) => (
              <motion.tr 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                key={tx.id} 
                className="border-b border-white/5 hover:bg-white/5 transition-colors group cursor-pointer"
              >
                <td className="py-5 px-6">
                  <div className="flex items-center gap-3">
                    <FileText className="w-4 h-4 text-slate-600 group-hover:text-amber-500 transition-colors" />
                    <span className="text-sm font-medium text-slate-300">{tx.id}</span>
                  </div>
                </td>
                <td className="py-5 px-6 text-sm text-slate-400">{tx.date}</td>
                <td className="py-5 px-6 text-sm text-slate-300">{tx.type}</td>
                <td className="py-5 px-6">
                  <div className="flex items-center gap-1.5">
                    {tx.type === "Deposit" ? (
                      <ArrowDownRight className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <ArrowUpRight className="w-4 h-4 text-amber-500" />
                    )}
                    <span className="text-sm font-bold text-white">{tx.amount}</span>
                    <span className="text-xs font-semibold text-slate-500">{tx.asset}</span>
                  </div>
                </td>
                <td className="py-5 px-6 text-sm text-slate-400">{tx.network}</td>
                <td className="py-5 px-6">
                  <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${
                    tx.status === 'Completed' ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' : 
                    tx.status === 'Pending' ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20' : 
                    'bg-rose-500/10 text-rose-500 border border-rose-500/20'
                  }`}>
                    {tx.status}
                  </span>
                </td>
                <td className="py-5 px-6">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-mono text-slate-500">{tx.hash}</span>
                    <ExternalLink className="w-3 h-3 text-slate-600 group-hover:text-amber-500 cursor-pointer" />
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
