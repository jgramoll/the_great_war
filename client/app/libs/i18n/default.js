import { defineMessages } from 'react-intl';

const defaultLocale = 'en';

const defaultMessages = defineMessages({"deviseConfirmationsConfirmed":{"id":"devise.confirmations.confirmed","defaultMessage":"Your email address has been successfully confirmed."},"deviseConfirmationsSendInstructions":{"id":"devise.confirmations.send_instructions","defaultMessage":"You will receive an email with instructions for how to confirm your email address in a few minutes."},"deviseConfirmationsSendParanoidInstructions":{"id":"devise.confirmations.send_paranoid_instructions","defaultMessage":"If your email address exists in our database, you will receive an email with instructions for how to confirm your email address in a few minutes."},"deviseFailureAlreadyAuthenticated":{"id":"devise.failure.already_authenticated","defaultMessage":"You are already signed in."},"deviseFailureInactive":{"id":"devise.failure.inactive","defaultMessage":"Your account is not activated yet."},"deviseFailureInvalid":{"id":"devise.failure.invalid","defaultMessage":"Invalid %{authentication_keys} or password."},"deviseFailureLocked":{"id":"devise.failure.locked","defaultMessage":"Your account is locked."},"deviseFailureLastAttempt":{"id":"devise.failure.last_attempt","defaultMessage":"You have one more attempt before your account is locked."},"deviseFailureNotFoundInDatabase":{"id":"devise.failure.not_found_in_database","defaultMessage":"Invalid %{authentication_keys} or password."},"deviseFailureTimeout":{"id":"devise.failure.timeout","defaultMessage":"Your session expired. Please sign in again to continue."},"deviseFailureUnauthenticated":{"id":"devise.failure.unauthenticated","defaultMessage":"You need to sign in or sign up before continuing."},"deviseFailureUnconfirmed":{"id":"devise.failure.unconfirmed","defaultMessage":"You have to confirm your email address before continuing."},"deviseMailerConfirmationInstructionsSubject":{"id":"devise.mailer.confirmation_instructions.subject","defaultMessage":"Confirmation instructions"},"deviseMailerResetPasswordInstructionsSubject":{"id":"devise.mailer.reset_password_instructions.subject","defaultMessage":"Reset password instructions"},"deviseMailerUnlockInstructionsSubject":{"id":"devise.mailer.unlock_instructions.subject","defaultMessage":"Unlock instructions"},"deviseMailerEmailChangedSubject":{"id":"devise.mailer.email_changed.subject","defaultMessage":"Email Changed"},"deviseMailerPasswordChangeSubject":{"id":"devise.mailer.password_change.subject","defaultMessage":"Password Changed"},"deviseOmniauthCallbacksFailure":{"id":"devise.omniauth_callbacks.failure","defaultMessage":"Could not authenticate you from %{kind} because \"%{reason}\"."},"deviseOmniauthCallbacksSuccess":{"id":"devise.omniauth_callbacks.success","defaultMessage":"Successfully authenticated from %{kind} account."},"devisePasswordsNoToken":{"id":"devise.passwords.no_token","defaultMessage":"You can't access this page without coming from a password reset email. If you do come from a password reset email, please make sure you used the full URL provided."},"devisePasswordsSendInstructions":{"id":"devise.passwords.send_instructions","defaultMessage":"You will receive an email with instructions on how to reset your password in a few minutes."},"devisePasswordsSendParanoidInstructions":{"id":"devise.passwords.send_paranoid_instructions","defaultMessage":"If your email address exists in our database, you will receive a password recovery link at your email address in a few minutes."},"devisePasswordsUpdated":{"id":"devise.passwords.updated","defaultMessage":"Your password has been changed successfully. You are now signed in."},"devisePasswordsUpdatedNotActive":{"id":"devise.passwords.updated_not_active","defaultMessage":"Your password has been changed successfully."},"deviseRegistrationsDestroyed":{"id":"devise.registrations.destroyed","defaultMessage":"Bye! Your account has been successfully cancelled. We hope to see you again soon."},"deviseRegistrationsSignedUp":{"id":"devise.registrations.signed_up","defaultMessage":"Welcome! You have signed up successfully."},"deviseRegistrationsSignedUpButInactive":{"id":"devise.registrations.signed_up_but_inactive","defaultMessage":"You have signed up successfully. However, we could not sign you in because your account is not yet activated."},"deviseRegistrationsSignedUpButLocked":{"id":"devise.registrations.signed_up_but_locked","defaultMessage":"You have signed up successfully. However, we could not sign you in because your account is locked."},"deviseRegistrationsSignedUpButUnconfirmed":{"id":"devise.registrations.signed_up_but_unconfirmed","defaultMessage":"A message with a confirmation link has been sent to your email address. Please follow the link to activate your account."},"deviseRegistrationsUpdateNeedsConfirmation":{"id":"devise.registrations.update_needs_confirmation","defaultMessage":"You updated your account successfully, but we need to verify your new email address. Please check your email and follow the confirm link to confirm your new email address."},"deviseRegistrationsUpdated":{"id":"devise.registrations.updated","defaultMessage":"Your account has been updated successfully."},"deviseSessionsSignedIn":{"id":"devise.sessions.signed_in","defaultMessage":"Signed in successfully."},"deviseSessionsSignedOut":{"id":"devise.sessions.signed_out","defaultMessage":"Signed out successfully."},"deviseSessionsAlreadySignedOut":{"id":"devise.sessions.already_signed_out","defaultMessage":"Signed out successfully."},"deviseUnlocksSendInstructions":{"id":"devise.unlocks.send_instructions","defaultMessage":"You will receive an email with instructions for how to unlock your account in a few minutes."},"deviseUnlocksSendParanoidInstructions":{"id":"devise.unlocks.send_paranoid_instructions","defaultMessage":"If your account exists, you will receive an email with instructions for how to unlock it in a few minutes."},"deviseUnlocksUnlocked":{"id":"devise.unlocks.unlocked","defaultMessage":"Your account has been unlocked successfully. Please sign in to continue."},"errorsMessagesAlreadyConfirmed":{"id":"errors.messages.already_confirmed","defaultMessage":"was already confirmed, please try signing in"},"errorsMessagesConfirmationPeriodExpired":{"id":"errors.messages.confirmation_period_expired","defaultMessage":"needs to be confirmed within %{period}, please request a new one"},"errorsMessagesExpired":{"id":"errors.messages.expired","defaultMessage":"has expired, please request a new one"},"errorsMessagesNotFound":{"id":"errors.messages.not_found","defaultMessage":"not found"},"errorsMessagesNotLocked":{"id":"errors.messages.not_locked","defaultMessage":"was not locked"},"errorsMessagesNotSavedOne":{"id":"errors.messages.not_saved.one","defaultMessage":"1 error prohibited this %{resource} from being saved:"},"errorsMessagesNotSavedOther":{"id":"errors.messages.not_saved.other","defaultMessage":"%{count} errors prohibited this %{resource} from being saved:"},"create":{"id":"create","defaultMessage":"Create"},"name":{"id":"name","defaultMessage":"Name"},"games":{"id":"games","defaultMessage":"Games"},"newGame":{"id":"new_game","defaultMessage":"New Game"},"welcome":{"id":"welcome","defaultMessage":"Hello {name}, you have {unreadCount} {unreadCount, plural, one {message} other {messages} }"},"errorsUnavailableSession":{"id":"errors.unavailable_session","defaultMessage":"Session %{id} is no longer available in memory.\n\nIf you happen to run on a multi-process server (like Unicorn or Puma) the process\nthis request hit doesn't store %{id} in memory. Consider turning the number of\nprocesses/workers to one (1) or using a different server in development.\n"},"errorsUnacceptableRequest":{"id":"errors.unacceptable_request","defaultMessage":"A supported version is expected in the Accept header.\n"},"errorsConnectionRefused":{"id":"errors.connection_refused","defaultMessage":"Oops! Failed to connect to the Web Console middleware.\nPlease make sure a rails development server is running.\n"}});

export { defaultMessages, defaultLocale };