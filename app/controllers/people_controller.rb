class PeopleController < ApplicationController
  before_action :set_person

  def index
    people = Person.all
    render json: people
  end

  def show
    render json: @person
  end

  private 

  def set_person
    @person = Person.find(params[:id])
  end

end
