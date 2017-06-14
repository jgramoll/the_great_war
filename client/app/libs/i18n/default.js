import { defineMessages } from 'react-intl';

const defaultLocale = 'en';

const defaultMessages = defineMessages({"games":{"id":"games","defaultMessage":"Games"},"newGame":{"id":"new_game","defaultMessage":"New game"},"welcome":{"id":"welcome","defaultMessage":"Hello {name}, you have {unreadCount} {unreadCount, plural, one {message} other {messages} }"},"errorsUnavailableSession":{"id":"errors.unavailable_session","defaultMessage":"Session %{id} is no longer available in memory.\n\nIf you happen to run on a multi-process server (like Unicorn or Puma) the process\nthis request hit doesn't store %{id} in memory. Consider turning the number of\nprocesses/workers to one (1) or using a different server in development.\n"},"errorsUnacceptableRequest":{"id":"errors.unacceptable_request","defaultMessage":"A supported version is expected in the Accept header.\n"},"errorsConnectionRefused":{"id":"errors.connection_refused","defaultMessage":"Oops! Failed to connect to the Web Console middleware.\nPlease make sure a rails development server is running.\n"}});

export { defaultMessages, defaultLocale };
