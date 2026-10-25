import React, { useState } from 'react';
import { Play, Copy, Check, Terminal, Clock, CheckCircle2 } from 'lucide-react';
import { SqlQueryItem } from '../data/projects';

interface SqlWorkbenchProps {
  queries?: SqlQueryItem[];
}

export const SqlWorkbench: React.FC<SqlWorkbenchProps> = ({ queries = [] }) => {
  const [activeQueryIndex, setActiveQueryIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [copied, setCopied] = useState(false);
  const [executionMessage, setExecutionMessage] = useState<string | null>(null);

  if (!queries || queries.length === 0) return null;

  const currentQuery = queries[activeQueryIndex];

  const handleRunQuery = () => {
    setIsRunning(true);
    setExecutionMessage(null);

    setTimeout(() => {
      setIsRunning(false);
      setExecutionMessage(`Выполнено за ${currentQuery.time} • ${currentQuery.rows.length} строк`);
    }, 220);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(currentQuery.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-2xl border border-zinc-700/80 bg-zinc-950 text-zinc-100 overflow-hidden shadow-2xl mt-4">
      
      {/* IDE Top Bar */}
      <div className="flex flex-wrap items-center justify-between px-4 py-3 bg-zinc-900/90 border-b border-zinc-800 gap-2">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <div className="flex items-center gap-1.5 font-mono text-xs text-zinc-400">
            <Terminal className="w-3.5 h-3.5 text-zinc-500" />
            <span>dbeaver_postgres_analytics.sql</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyCode}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-800 hover:bg-zinc-750 text-xs font-mono text-zinc-300 transition-colors"
          >
            {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-zinc-400" />}
            <span>{copied ? 'Скопировано!' : 'Copy SQL'}</span>
          </button>
        </div>
      </div>

      {/* Query Selector Tabs */}
      <div className="flex overflow-x-auto gap-1 p-2 bg-zinc-900/40 border-b border-zinc-800 text-xs font-mono">
        {queries.map((q, idx) => (
          <button
            key={q.id}
            onClick={() => {
              setActiveQueryIndex(idx);
              setExecutionMessage(null);
            }}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all ${
              activeQueryIndex === idx
                ? 'bg-zinc-800 text-white font-medium shadow-sm border border-zinc-700'
                : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-850'
            }`}
          >
            {q.name}
          </button>
        ))}
      </div>

      {/* SQL Code Viewport */}
      <div className="p-4 bg-zinc-950 font-mono text-xs md:text-sm leading-relaxed overflow-x-auto max-h-56 text-zinc-300">
        <pre>
          <code>{currentQuery.code}</code>
        </pre>
      </div>

      {/* Action / Execution Bar */}
      <div className="flex flex-wrap items-center justify-between px-4 py-2.5 bg-zinc-900/80 border-t border-b border-zinc-800 gap-3">
        <div className="flex items-center gap-3">
          <button
            onClick={handleRunQuery}
            disabled={isRunning}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500 hover:bg-emerald-400 active:scale-98 text-zinc-950 font-bold text-xs tracking-wide transition-all shadow-md disabled:opacity-50"
          >
            <Play className={`w-3.5 h-3.5 fill-current ${isRunning ? 'animate-spin' : ''}`} />
            <span>{isRunning ? 'Выполняется...' : 'Run Query'}</span>
          </button>

          <span className="text-[11px] font-mono text-zinc-400 hidden sm:inline">
            или нажмите <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">Ctrl+Enter</kbd>
          </span>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="text-zinc-400">PostgreSQL 16 • Ready</span>
          {executionMessage && (
            <span className="px-2 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-800 text-emerald-400 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" />
              <span>{executionMessage}</span>
            </span>
          )}
        </div>
      </div>

      {/* Results Data Table */}
      <div className="overflow-x-auto max-h-60 bg-zinc-950">
        <table className="w-full text-left text-xs font-mono border-collapse">
          <thead>
            <tr className="bg-zinc-900/90 text-zinc-400 border-b border-zinc-800">
              {currentQuery.headers.map((h, i) => (
                <th key={i} className="px-4 py-2 font-medium">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-900">
            {currentQuery.rows.map((row, rIdx) => (
              <tr key={rIdx} className="hover:bg-zinc-900/50 transition-colors">
                {row.map((cell, cIdx) => {
                  const isNum = cell.includes('$') || cell.includes('%') || !isNaN(Number(cell.replace(/,/g, '')));
                  const isHighlight = cell.includes('%') || cell.includes('#1') || cell.includes('Champions');
                  return (
                    <td
                      key={cIdx}
                      className={`px-4 py-2 ${isNum ? 'text-right' : ''} ${
                        isHighlight ? 'text-emerald-400 font-semibold' : 'text-zinc-200'
                      }`}
                    >
                      {cell}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};
