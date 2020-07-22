class PeopleController < ApplicationController
  before_action :set_person, only: [:show, :update, :destroy]

  def index
    people = Person.all
    render json: people
  end

  def show
    render json: @person
  end

  def create
    @person = Person.create!(person_params)
    render json: @person
  end

  def update
    @person.update(person_params)
    head :no_content
  end

  def destroy
    @person.destroy
    head :no_content
  end

  private 

  def person_params
    params.permit(:first_name, :last_name)
  end

  def set_person
    @person = Person.find(params[:id])
  end

end
