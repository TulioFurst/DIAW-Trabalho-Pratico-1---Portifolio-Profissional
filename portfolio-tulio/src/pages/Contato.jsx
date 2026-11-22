import { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle2, AlertCircle, ExternalLink } from 'lucide-react';

export default function Contato() {
  const SEU_EMAIL = 'takar@sga.pucminas.br';

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: '',
  });

  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${SEU_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.nome,
          email: formData.email,
          message: formData.mensagem,
          _subject: `Novo contato pelo Portfólio Tui.dev - ${formData.nome}`,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ nome: '', email: '', mensagem: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const socialLinks = [
    {
      name: 'E-mail Direto',
      handle: SEU_EMAIL,
      href: `mailto:${SEU_EMAIL}`,
      color: 'hover:border-pride-mint/60 hover:text-pride-mint',
      icon: <Mail className="w-6 h-6 text-pride-mint" />,
    },
    {
      name: 'GitHub',
      handle: 'github.com/TulioFurst',
      href: 'https://github.com/TulioFurst',
      color: 'hover:border-pride-ice/60 hover:text-pride-ice',
      icon: (
        <svg className="w-6 h-6 text-pride-ice" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      handle: 'Conectar no LinkedIn',
      href: 'https://www.linkedin.com',
      color: 'hover:border-pride-sky/60 hover:text-pride-sky',
      icon: (
        <svg className="w-6 h-6 text-pride-sky" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: 'WhatsApp / Comunidade',
      handle: 'Mensagem rápida',
      href: 'https://wa.me/',
      color: 'hover:border-pride-indigo/60 hover:text-pride-indigo',
      icon: <MessageSquare className="w-6 h-6 text-pride-indigo" />,
    },
  ];

  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          Vamos <span className="text-pride-mint">Conversar?</span>
        </h1>
        <p className="text-gray-400 max-w-2xl">
          Tem alguma oportunidade, ideia de projeto ou quer trocar uma ideia sobre desenvolvimento e interfaces? Escolha um canal abaixo ou envie um e-mail direto pelo formulário.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-lg font-bold text-white mb-2">Canais & Redes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className={`flex items-center justify-between p-4 rounded-xl bg-stage-surface border border-stage-border transition-all duration-200 group ${item.color}`}
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-lg bg-stage-bg border border-stage-border">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{item.name}</p>
                    <p className="text-xs text-gray-400">{item.handle}</p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="bg-stage-surface border border-stage-border rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="text-lg font-bold text-white mb-6">Envie uma mensagem direta</h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-gray-300 mb-1.5">
                  Seu Nome
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  required
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="Ex: Ana Silva"
                  className="w-full px-4 py-3 rounded-xl bg-stage-bg border border-stage-border text-white placeholder-gray-500 focus:outline-none focus:border-pride-mint transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5">
                  Seu E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ana@exemplo.com"
                  className="w-full px-4 py-3 rounded-xl bg-stage-bg border border-stage-border text-white placeholder-gray-500 focus:outline-none focus:border-pride-mint transition-colors"
                />
              </div>

              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium text-gray-300 mb-1.5">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows="4"
                  required
                  value={formData.mensagem}
                  onChange={handleChange}
                  placeholder="Escreva sua mensagem aqui..."
                  className="w-full px-4 py-3 rounded-xl bg-stage-bg border border-stage-border text-white placeholder-gray-500 focus:outline-none focus:border-pride-mint transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-pride-emerald via-pride-mint to-pride-sky hover:opacity-90 disabled:opacity-50 text-stage-bg font-bold transition-all shadow-[0_0_20px_rgba(38,206,170,0.25)]"
              >
                {status === 'loading' ? (
                  <span>Enviando...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Enviar Mensagem</span>
                  </>
                )}
              </button>

              {status === 'success' && (
                <div className="flex items-center gap-2 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>Mensagem enviada com sucesso! Responderei em breve.</span>
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-center gap-2 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span>Ocorreu um erro ao enviar. Tente novamente ou use o e-mail direto ao lado.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}