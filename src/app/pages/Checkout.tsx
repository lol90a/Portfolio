import { motion } from "motion/react";
import { Link, useSearchParams } from "react-router";
import { Copy, CheckCircle2, ShieldAlert, ArrowRight, Bitcoin, CreditCard, ScanLine, Wallet } from "lucide-react";
import { useState, useEffect } from "react";
import { ASSET_DATA } from "../data/assets";

export default function Checkout() {
  const [searchParams] = useSearchParams();
  const assetId = searchParams.get("assetId");
  const asset = assetId ? ASSET_DATA.find(a => a.id === assetId) : null;

  const [copied, setCopied] = useState(false);
  const [step, setStep] = useState(1);
  const walletAddress = "0x8fB...4e21";

  // If asset exists, use its data. Otherwise use default flight data.
  const isAssetPurchase = !!asset;
  const itemName = asset ? asset.name : "Challenger 350";
  const itemType = asset ? asset.assetType : "Aircraft";
  const itemDetail1Label = asset ? "Category" : "Route";
  const itemDetail1Value = asset ? asset.category : "LHR → DXB";
  const itemDetail2Label = asset ? "Location" : "Date";
  const itemDetail2Value = asset ? asset.location : "Oct 24, 2026";
  const totalBtc = asset ? asset.price : "0.38 BTC";
  const totalUsd = asset ? asset.usdPrice : "~ $26,000 USD";
  const btcAmountOnly = asset ? asset.price.replace(" BTC", "") : "0.38";

  const handleCopy = () => {
    navigator.clipboard.writeText("0x8fB1234567890abcdef1234567890abcdef4e21");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    if (step === 2) {
      const timer = setTimeout(() => setStep(3), 5000);
      return () => clearTimeout(timer);
    }
  }, [step]);

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <div className="mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Secure Checkout</h1>
        <p className="text-slate-400">Complete your reservation securely using cryptocurrency.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Order Summary */}
        <div className="lg:col-span-1 space-y-6">
          <div className="p-6 rounded-3xl bg-[#0A0A0E] border border-white/5 shadow-2xl shadow-black/50">
            <h3 className="text-lg font-bold text-white mb-6">Booking Summary</h3>
            <div className="flex flex-col gap-4 mb-6">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-400">{itemType}</span>
                <span className="text-white font-medium">{itemName}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-400">{itemDetail1Label}</span>
                <span className="text-white font-medium">{itemDetail1Value}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-400">{itemDetail2Label}</span>
                <span className="text-white font-medium">{itemDetail2Value}</span>
              </div>
            </div>
            
            <div className="border-t border-white/10 pt-6 mb-2">
              <div className="flex justify-between items-end">
                <span className="text-sm font-medium text-slate-400">Total Due</span>
                <div className="text-right">
                  <span className="text-2xl font-bold text-white block">{totalBtc}</span>
                  <span className="text-xs text-slate-500">{totalUsd}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Details */}
        <div className="lg:col-span-2">
          <motion.div 
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-8 rounded-3xl bg-[#0A0A0E] border border-white/5 relative overflow-hidden"
          >
            {step === 1 && (
              <>
                <div className="flex justify-between items-center mb-8 pb-6 border-b border-white/10">
                  <div>
                    <h2 className="text-xl font-bold text-white">Payment Instructions</h2>
                    <p className="text-sm text-slate-400">Send exactly <span className="font-bold text-amber-500">{btcAmountOnly} BTC</span> to the address below.</p>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-bold tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" /> AWAITING PAYMENT
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start mb-8">
                  {/* QR Code Placeholder */}
                  <div className="w-48 h-48 bg-white p-4 rounded-2xl flex items-center justify-center relative group">
                    <ScanLine className="w-full h-full text-slate-200" />
                    <div className="absolute inset-0 border-4 border-amber-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Bitcoin className="absolute inset-0 m-auto w-12 h-12 text-amber-500 fill-amber-500 bg-white rounded-full p-1" />
                  </div>
                  
                  <div className="flex-1 w-full space-y-6">
                    <div>
                      <label className="text-xs uppercase tracking-wider font-semibold text-slate-500 mb-2 block">Network</label>
                      <div className="px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white font-medium flex items-center gap-2">
                        <Bitcoin className="w-4 h-4 text-amber-500" /> Bitcoin (BTC)
                      </div>
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-wider font-semibold text-slate-500 mb-2 block">Destination Address</label>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white font-mono text-sm break-all">
                          0x8fB1234567890abcdef...
                        </div>
                        <button onClick={handleCopy} className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                          {copied ? <CheckCircle2 className="w-5 h-5 text-emerald-500" /> : <Copy className="w-5 h-5 text-slate-300" />}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-4 flex items-start gap-4 mb-8">
                  <ShieldAlert className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-amber-500/80 leading-relaxed">
                    Please ensure you are sending on the correct network. Transactions are irreversible. Your reservation will be confirmed automatically upon 2 network confirmations.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 border-t border-white/10 pt-6">
                  <button onClick={() => setStep(2)} className="w-full py-4 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-xl transition-all shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                    I Have Sent Payment
                  </button>
                  <button className="w-full py-4 border border-white/10 text-white font-medium rounded-xl hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
                    <Wallet className="w-4 h-4" /> Connect Web3 Wallet
                  </button>
                </div>
              </>
            )}

            {step === 2 && (
              <div className="py-16 flex flex-col items-center text-center">
                <div className="w-20 h-20 relative mb-8">
                  <div className="absolute inset-0 border-4 border-slate-800 rounded-full" />
                  <div className="absolute inset-0 border-4 border-amber-500 rounded-full border-t-transparent animate-spin" />
                  <Bitcoin className="absolute inset-0 m-auto w-8 h-8 text-amber-500" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">Verifying Transaction</h2>
                <p className="text-slate-400 max-w-md">We are scanning the blockchain for your payment. This usually takes 1-3 minutes depending on network congestion.</p>
                <div className="mt-8 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-500">
                  Scanning Mempool... (0/2 Confirmations)
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="py-16 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mb-8 relative shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                  <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Payment Confirmed</h2>
                <p className="text-slate-400 max-w-md mb-8">
                  {isAssetPurchase 
                    ? "Your asset acquisition has been successfully funded. Our escrow team will contact you shortly to arrange the title transfer."
                    : "Your charter flight has been successfully booked and paid in full. Your pilot and itinerary details will be available shortly."}
                </p>
                
                <div className="w-full max-w-sm border border-white/10 rounded-2xl bg-black/50 p-4 mb-8">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-500">Transaction ID</span>
                    <span className="text-white font-mono">AL-9281-FX</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Tx Hash</span>
                    <span className="text-amber-500 font-mono">0x8fB1...4e21</span>
                  </div>
                </div>

                <Link to="/dashboard" className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-xl transition-all flex items-center gap-2">
                  Go to Dashboard <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
