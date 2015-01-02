# encoding: utf-8

Locomotive.configure do |config|
  config.multi_sites = false
  config.name = "... Admin Panel"
  # default locale (for now, only en, de, fr, pl, pt-BR, it, nb, ja, zh-CN, cs, bg and sk are supported)
  config.default_locale = :tr
  # available locales suggested to "localize" a site. You will have to pick up at least one among that list.
  # config.site_locales = %w{en de fr pl pt-BR it nl nb es ru ja zh-CN cs bg sk sr}
  config.site_locales = %w{tr en}
  config.locales = %w{tr en}
  config.enable_logs = true
  config.mailer_sender = 'support@example.com'
  config.csrf_protection = true
end