# coding: utf-8

"""
    Tebex Headless API

    The headless API is designed for implementing your own store frontend with the data of your store. You are able to call the Headless API directly from a web browser (such as within an SPA), or from a backend server, such as for in-game GUIs.

    The version of the OpenAPI document: 1.0.0
    Contact: tebex-integrations@overwolf.com
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


from __future__ import annotations
import pprint
import re  # noqa: F401
import json

from pydantic import BaseModel, ConfigDict, Field, StrictInt, StrictStr, field_validator
from typing import Any, ClassVar, Dict, List, Optional
from TebexHeadless.models.package import Package
from typing import Optional, Set
from typing_extensions import Self

class Category(BaseModel):
    """
    Category
    """ # noqa: E501
    id: Optional[StrictInt] = None
    name: Optional[StrictStr] = Field(default=None, description="User-friendly name of the category")
    slug: Optional[StrictStr] = Field(default=None, description="Short identifier slug for the category")
    parent: Optional[Dict[str, Any]] = Field(default=None, description="Parent category, if applicable")
    description: Optional[StrictStr] = Field(default=None, description="HTML description of the category")
    packages: Optional[List[Package]] = None
    order: Optional[StrictInt] = Field(default=None, description="The numeric order in which to display the category.")
    display_type: Optional[StrictStr] = Field(default=None, description="How the category should be displayed")
    __properties: ClassVar[List[str]] = ["id", "name", "slug", "parent", "description", "packages", "order", "display_type"]

    @field_validator('display_type')
    def display_type_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['list', 'grid']):
            raise ValueError("must be one of enum values ('list', 'grid')")
        return value

    model_config = ConfigDict(
        populate_by_name=True,
        validate_assignment=True,
        protected_namespaces=(),
    )


    def to_str(self) -> str:
        """Returns the string representation of the model using alias"""
        return pprint.pformat(self.model_dump(by_alias=True))

    def to_json(self) -> str:
        """Returns the JSON representation of the model using alias"""
        # TODO: pydantic v2: use .model_dump_json(by_alias=True, exclude_unset=True) instead
        return json.dumps(self.to_dict())

    @classmethod
    def from_json(cls, json_str: str) -> Optional[Self]:
        """Create an instance of Category from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self) -> Dict[str, Any]:
        """Return the dictionary representation of the model using alias.

        This has the following differences from calling pydantic's
        `self.model_dump(by_alias=True)`:

        * `None` is only added to the output dict for nullable fields that
          were set at model initialization. Other fields with value `None`
          are ignored.
        """
        excluded_fields: Set[str] = set([
        ])

        _dict = self.model_dump(
            by_alias=True,
            exclude=excluded_fields,
            exclude_none=True,
        )
        # override the default output from pydantic by calling `to_dict()` of each item in packages (list)
        _items = []
        if self.packages:
            for _item in self.packages:
                if _item:
                    _items.append(_item.to_dict())
            _dict['packages'] = _items
        # set to None if slug (nullable) is None
        # and model_fields_set contains the field
        if self.slug is None and "slug" in self.model_fields_set:
            _dict['slug'] = None

        # set to None if parent (nullable) is None
        # and model_fields_set contains the field
        if self.parent is None and "parent" in self.model_fields_set:
            _dict['parent'] = None

        # set to None if packages (nullable) is None
        # and model_fields_set contains the field
        if self.packages is None and "packages" in self.model_fields_set:
            _dict['packages'] = None

        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of Category from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "id": obj.get("id"),
            "name": obj.get("name"),
            "slug": obj.get("slug"),
            "parent": obj.get("parent"),
            "description": obj.get("description"),
            "packages": [Package.from_dict(_item) for _item in obj["packages"]] if obj.get("packages") is not None else None,
            "order": obj.get("order"),
            "display_type": obj.get("display_type")
        })
        return _obj


