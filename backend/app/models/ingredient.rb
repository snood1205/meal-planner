# frozen_string_literal: true

class Ingredient < ApplicationRecord
  ALREADY_OWNED_ERROR_MESSAGE = 'cannot be specified for an already owned ingredient'

  belongs_to :recipe

  scope :owned, -> { where(already_owned: true) }
  scope :to_buy, -> { where(already_owned: false) }

  validate :validate_against_already_owned

  private

  def validate_against_already_owned
    return unless already_owned

    errors.add(:store_at_which_to_purchase, ALREADY_OWNED_ERROR_MESSAGE) if store_at_which_to_purchase.present?
    errors.add(:estimated_cost_in_cents, ALREADY_OWNED_ERROR_MESSAGE) if estimated_cost_in_cents.positive?
  end
end
